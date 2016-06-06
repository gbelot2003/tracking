<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use App\Bolsa;

class BagStatusSave extends Event
{
    use SerializesModels;
    public $bolsa;


    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Bolsa $bolsa)
    {
        $this->bolsa = $bolsa;
    }
}
