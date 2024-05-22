<?php

namespace App\Http\Controllers;

use App\Enums\StorageMediaCollectionName;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Exception;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use function Laravel\Prompts\error;

class AuthController extends Controller
{
    public function register(RegistrationRequest $request)
    {

        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);
        $data['date_of_birth'] = Carbon::parse($data['date_of_birth'])->format('Y-m-d');
        $data['username'] = Str::snake($data['name'] . Str::random(5));

        try {
            DB::beginTransaction();

            $user = User::create($data);

            $user->addMediaFromBase64($request->validated('user_profile_image'))
                ->toMediaCollection(StorageMediaCollectionName::PROFILE_IMAGES->value);

            $user->interests()->attach($data['interests'], [
                'least_favorite_id' => $data['least_favorite'],
            ]);

            $accessToken = $user->createToken('access_token')->accessToken;

            DB::commit();

            return response()->json([
                'message' => 'User has been registered successfully',
                'data' => [
                    'access_token' => $accessToken,
                ],
            ]);
        } catch (Exception $exception) {
            DB::rollBack();

            error($exception);

            return response()->json([
                'message' => 'User registration failed',
            ]);
        }
    }

    public function login(LoginRequest $request)
    {
        $validatedUser = $request->validated();
        $auth = auth()->attempt($validatedUser);

        abort_if(!$auth, 401, 'Invalid credentials');

        $accessToken = auth()->user()->createToken('access_token')->accessToken;

        return response()->json([
            'message' => 'User has been logged in successfully',
            'data' => [
                'access_token' => $accessToken,
            ],
        ]);

    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->noContent();
    }

    public function getCurrentAuthUser()
    {
        $user = auth()->user();

        $user->load('interests:id,name');

        return $this->getUserProfileByUsername($user->username);
    }

    public function getUserProfileByUsername(string $username)
    {
        $user = User::whereUsername($username)->firstOrFail();

        $user->load('city');

        return Cache::remember($user->username, 60 * 60 * 24, fn() => response()->json([
            'data' => [
                'is_auth_user' => auth()->user()->is($user),
                'user' => new UserResource($user),
            ],
        ]));

    }
}
