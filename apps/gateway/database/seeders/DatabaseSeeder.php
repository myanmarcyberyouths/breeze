<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Activity;
use App\Models\CityList;
use App\Models\Event;
use App\Models\Interest;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ActionSeeder::class,
            IntrestSeeder::class,
            CityListSeeder::class,
        ]);

        User::factory()->count(10)
            ->hasAttached(
                Interest::all()->random(3),
                [
                    'least_favorite_id' => 9,
                ],
            )
            ->create()
            ->each(
                fn (User $user) => $user
                    ->events()->saveMany(
                        Event::factory()
                            ->count(3)->make()
                    ),
            );

        User::all()
            ->each(
                fn (User $user) => $user->address()->create([
                    'city_list_id' => CityList::all()->random()->id,
                ])
            );

        Event::all()
            ->each(
                fn (Event $event) => $event->interests()->attach(
                    Interest::all()->random(3)
                ),
            );

        //        Activity::create([
        //            'action_id' => 1,
        //            'user_id' => 1,
        //            'event_id' => 4,
        //        ]);
        //
        //        Activity::create([
        //            'action_id' => 3, // like
        //            'user_id' => 1,
        //            'event_id' => 5,
        //        ]);
        //
        //        Activity::create([
        //            'action_id' => 4, // bookmark
        //            'user_id' => 1,
        //            'event_id' => 5,
        //        ]);
        //
        //
        //        Activity::create([
        //            'action_id' => 5, // repost
        //            'user_id' => 1,
        //            'event_id' => 5,
        //        ]);

    }
}
