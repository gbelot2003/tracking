<?php

use App\Transito;
use App\Shipment;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
class ReportControllerTest extends TestCase
{
    use DatabaseTransactions;

    /**
     * Given:
     * 20 Shipments
     * --> 3 transitos
     * -----> 1 En espera, 1 Trancito Regular, 1 Trancito de Cierre
     *
     */

    protected function create_many_shipments()
    {
        $ship = factory(Shipment::class)->create([
            'created_at' => '2016-05-29 00:34:21',
            'updated_at' => '2016-05-29 00:34:21'
        ]);

        $ship2 = factory(Shipment::class)->create([
            'created_at' => '2016-06-29 00:34:21',
            'updated_at' => '2016-06-29 00:34:21'
        ]);

        $ship3 = factory(Shipment::class)->create([
            'user_id' => 2,
            'created_at' => '2016-07-29 00:34:21',
            'updated_at' => '2016-07-29 00:34:21'
        ]);


        $transito1 = factory(App\Transito::class)->create(
            ['estado_id' => 1, 'shipment_id' => $ship->id]
        );

        $transito2 = factory(App\Transito::class)->create(
            ['estado_id' => 3, 'shipment_id' => $ship->id]
        );



        $transito3 = factory(App\Transito::class)->create(
            ['estado_id' => 1, 'shipment_id' => $ship2->id]
        );

        $transito4 = factory(App\Transito::class)->create(
            ['estado_id' => 2, 'shipment_id' => $ship2->id]
        );

        $transito5 = factory(App\Transito::class)->create(
            ['estado_id' => 3, 'shipment_id' => $ship2->id]
        );



        $transito6 = factory(App\Transito::class)->create(
            ['estado_id' => 1, 'shipment_id' => $ship3->id]
        );

        $transito7 = factory(App\Transito::class)->create(
            ['estado_id' => 2, 'shipment_id' => $ship3->id]
        );

        $transito8 = factory(App\Transito::class)->create(
            ['estado_id' => 3, 'shipment_id' => $ship3->id]
        );

        $transito9 = factory(App\Transito::class)->create(
            ['estado_id' => 11, 'shipment_id' => $ship3->id]
        );

    }


    /** @test */
    public function shipments_are_created_and_count()
    {

        $this->create_many_shipments();

        //Asertts
        $shipments = Shipment::all();


        $this->assertEquals(3, $shipments->count());
    }

    /** @test */
    public function shipment_filter_by_dates()
    {
        $this->create_many_shipments();

        $shipments = Shipment::whereBet;
    }



}









































