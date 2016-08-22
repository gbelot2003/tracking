<?php

namespace App\Listeners\TransitosShipments;

use App\Events\TransitosShipments;
use App\Shipment;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateShipmentsOnCreate
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  TransitosShipments  $event
     * @return void
     */
    public function handle(TransitosShipments $event)
    {
        $shipment = Shipment::find($event->shipment_id);
        $shipment->update([
            'estado_id' => $event->estado_id
        ]);
    }
}
