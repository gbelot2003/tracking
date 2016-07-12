<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Queue\SerializesModels;

class BolsasStore extends Event
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
