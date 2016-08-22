<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class TransitosShipments extends Event
{
    use SerializesModels;

    public $shipment_id;
    public $estado_id;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($shipment_id, $estado_id)
    {
        $this->shipment_id = $shipment_id;
        $this->estado_id = $estado_id;
    }
}
