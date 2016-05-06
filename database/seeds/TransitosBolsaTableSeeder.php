<?php

use Illuminate\Database\Seeder;

class TransitosBolsaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\TransitoBolsa::class, 3000)->create();
    }
}
