<?php

namespace App\Http\Requests\V1\Auth;

use App\Enums\PronounType;
use App\Rules\Base64ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|min:3|max:20',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
            'date_of_birth' => 'required|date_format:d-m-Y',
            'pronoun' => 'required|in:he,she,they',
            'interests' => 'required|array',
            'profile_image' => ['required', new Base64ValidationRule()],
        ];
    }
}
