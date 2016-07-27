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

        $shipment = factory(App\Shipment::class, 10)->create();

        $shipment2 = factory(App\Shipment::class, 10)->create();

        foreach($shipment as $shipment){
            $transito1 = factory(App\Transito::class)->create(
                ['estado_id' => 1, 'shipment_id' => $shipment->id]
            );
            $transito2 = factory(App\Transito::class)->create(
                ['estado_id' => 3, 'shipment_id' => $shipment->id]
            );
        }


        foreach($shipment2 as $shipment){
            $transito1 = factory(App\Transito::class)->create(
                ['estado_id' => 1, 'shipment_id' => $shipment->id]
            );
            $transito2 = factory(App\Transito::class)->create(
                ['estado_id' => 2, 'shipment_id' => $shipment->id]
            );

            $transito3 = factory(App\Transito::class)->create(
                ['estado_id' => 3, 'shipment_id' => $shipment->id]
            );
        }

    }
}
