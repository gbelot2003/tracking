<?php

use Illuminate\Database\Seeder;

class ShipmentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Shipment::class, 2000)->create();
    }
}
