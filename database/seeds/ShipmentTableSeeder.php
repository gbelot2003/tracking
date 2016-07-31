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
        DB::table('shipments')->delete();

        $shipment = factory(App\Shipment::class)->create([
            'created_at' => '2016-05-10 00:34:21',
            'updated_at' => '2016-05-10 00:34:21'
        ]);

        $shipment2 = factory(App\Shipment::class)->create([
            'created_at' => '2016-06-10 00:34:21',
            'updated_at' => '2016-06-10 00:34:21'
        ]);

        $shipment3 = factory(App\Shipment::class)->create([
            'created_at' => '2016-07-10 00:34:21',
            'updated_at' => '2016-07-10 00:34:21'
        ]);



        $transito1 = factory(App\Transito::class)->create(
            ['estado_id' => 1, 'shipment_id' => $shipment->id]
        );

        $transito2 = factory(App\Transito::class)->create(
            ['estado_id' => 3, 'shipment_id' => $shipment->id]
        );



        $transito3 = factory(App\Transito::class)->create(
            ['estado_id' => 1, 'shipment_id' => $shipment2->id]
        );

        $transito4 = factory(App\Transito::class)->create(
            ['estado_id' => 2, 'shipment_id' => $shipment2->id]
        );

        $transito5 = factory(App\Transito::class)->create(
            ['estado_id' => 3, 'shipment_id' => $shipment2->id]
        );



        $transito6 = factory(App\Transito::class)->create(
            ['estado_id' => 1, 'shipment_id' => $shipment3->id]
        );

        $transito7 = factory(App\Transito::class)->create(
            ['estado_id' => 2, 'shipment_id' => $shipment3->id]
        );

        $transito8 = factory(App\Transito::class)->create(
            ['estado_id' => 3, 'shipment_id' => $shipment3->id]
        );

        $transito9 = factory(App\Transito::class)->create(
            ['estado_id' => 11, 'shipment_id' => $shipment3->id]
        );



    }
}
