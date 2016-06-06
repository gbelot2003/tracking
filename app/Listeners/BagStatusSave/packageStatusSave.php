<?php

namespace App\Listeners\BagStatusSave;

use App\Events\BagStatusSave;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class packageStatusSave
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
     * @param  BagStatusSave  $event
     * @return void
     */
    public function handle(BagStatusSave $event)
    {
        //
    }
}
