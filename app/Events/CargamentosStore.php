<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class CargamentosStore extends Event
{
    use SerializesModels;

    public $request;


    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($request)
    {
        $this->request = $request;
    }
}
