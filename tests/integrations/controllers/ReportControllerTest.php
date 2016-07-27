<?php

use App\Transito;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Shipment;

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

    /** @test */
    public function shipment_have_registers()
    {

        //$shipment = factory(Shipment::class, 20)->create();


        /*foreach($shipment as $shipment){
            $transito1 = factory(Transito::class)->create(['estado_id' => 1, 'shipment_id' => $shipment->id]);
            $transito2 = factory(Transito::class)->create(['estado_id' => 3, 'shipment_id' => $shipment->id]);
        }*/

        /** hay 20 registros en shipment*/
        //$this->assertEquals(20, count($shipment->all()));

        /** hay 2 transitos por registro */
        //$this->assertEquals(2, $shipment->count());

        // Trabajaremos con datos persistentes de aqui en adelante
        // llenamos desde seeders Shipements

        $shipment = Shipment::all();
        $this->assertEquals(20, count($shipment->all())); //ok

    }

    /** @test */
    public function shipments_have_related_transitos()
    {
        /** Encontramos un Shipment */
        $shipment = Shipment::findOrFail(1);

        /** El Shipment debe tener 2 transitos */
        $this->assertEquals(2, $shipment->transitCount());

        /** El Ultimo estado de transito debe ser 3 */
        $this->assertEquals(3, $shipment->transito->estados->id);
    }

}