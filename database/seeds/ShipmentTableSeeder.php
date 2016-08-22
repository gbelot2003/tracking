<?php

use App\Shipment;
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
        DB::table('shipments')->delete();

        $ship = factory(Shipment::class)->create([
            'created_at' => '2016-05-29 00:34:21',
            'updated_at' => '2016-05-29 00:34:21',
            'estado_id' => 2,
        ]);

        $ship2 = factory(Shipment::class)->create([
            'created_at' => '2016-06-29 00:34:21',
            'updated_at' => '2016-06-29 00:34:21',
            'estado_id' => 11,
        ]);

        $ship3 = factory(Shipment::class)->create([
            'user_id' => 2,
            'created_at' => '2016-07-29 00:34:21',
            'updated_at' => '2016-07-29 00:34:21',
            'estado_id' => 11,
        ]);



        $transito1 = factory(App\Transito::class)->create(
            [
                'created_at' => '2016-05-29 00:34:21',
                'updated_at' => '2016-05-30 00:34:21',
                'estado_id' => 1,
                'shipment_id' => $ship->id
            ]
        );

        $transito2 = factory(App\Transito::class)->create(
            [
                'created_at' => '2016-05-29 00:34:21',
                'updated_at' => '2016-05-30 00:34:21',
                'estado_id' => 2,
                'shipment_id' => $ship->id
            ]
        );



        $transito3 = factory(App\Transito::class)->create(
            [
                'created_at' => '2016-06-27 00:34:21',
                'updated_at' => '2016-06-27 00:34:21',
                'estado_id' => 1,
                'shipment_id' => $ship2->id
            ]
        );

        $transito4 = factory(App\Transito::class)->create(
            [
                'created_at' => '2016-06-28 00:34:21',
                'updated_at' => '2016-06-28 00:34:21',
                'estado_id' => 3,
                'shipment_id' => $ship2->id
            ]
        );

        $transito5 = factory(App\Transito::class)->create(
            [
                'created_at' => '2016-06-29 00:34:21',
                'updated_at' => '2016-06-29 00:34:21',
                'estado_id' => 11,
                'shipment_id' => $ship2->id
            ]
        );



        $transito6 = factory(App\Transito::class)->create(
            [
                'created_at' => '2016-07-29 00:34:21',
                'updated_at' => '2016-07-29 00:34:21',
                'estado_id' => 1,
                'shipment_id' => $ship3->id
            ]
        );

        $transito7 = factory(App\Transito::class)->create(
            [
                'created_at' => '2016-07-30 00:34:21',
                'updated_at' => '2016-07-30 00:34:21',
                'estado_id' => 2,
                'shipment_id' => $ship3->id
            ]
        );

        $transito8 = factory(App\Transito::class)->create(
            [
                'created_at' => '2016-07-31 00:34:21',
                'updated_at' => '2016-07-31 00:34:21',
                'estado_id' => 3,
                'shipment_id' => $ship3->id
            ]
        );

        $transito9 = factory(App\Transito::class)->create(
            [
                'created_at' => '2016-07-31 01:34:21',
                'updated_at' => '2016-07-31 01:34:21',
                'estado_id' => 11,
                'shipment_id' => $ship3->id
            ]
        );


    }
}
