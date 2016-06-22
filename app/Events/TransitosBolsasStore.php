<?php

namespace App\Events;

use App\Events\Event;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;

class TransitosBolsasStore extends Event
{
    use SerializesModels;

    public $request;

    /**
     * Create a new event instance.
     *
     * @param Request $request
     */
    public function __construct($request)
    {
        $this->request = $request;
    }
}
