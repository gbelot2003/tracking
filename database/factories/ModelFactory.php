<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->safeEmail,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Shipment::class, function (Faker\Generator $faker) {
    return [
        'code' => $faker->randomNumber(8),
        'sender_id' => $faker->numberBetween(1,202),
        'reciber_id' => $faker->numberBetween(1,202),
        'user_id'   => 1,
        'created_at' => $faker->dateTimeThisMonth(),
        'updated_at' => $faker->dateTimeThisMonth()
    ];
});

$factory->define(App\Transito::class, function (Faker\Generator $faker) {

    return [
        'shipment_id' => $faker->numberBetween(1,2000),
        'estado_id' => $faker->numberBetween(1,5),
        'establecimiento_id' => $faker->numberBetween(1, 229),
        'user_id' => 1,
        'details' => $faker->sentence(2),
    ];
});
