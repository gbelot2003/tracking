<?php

use Illuminate\Database\Seeder;

class BolsasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Bolsa::class, 1000)->create();    
    }
}
