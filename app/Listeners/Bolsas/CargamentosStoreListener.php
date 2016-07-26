<?php

namespace App\Listeners\Bolsas;

use App\Events\CargamentosStore;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CargamentosStoreListener
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
     * @param  CargamentosStore  $event
     * @return void
     */
    public function handle(CargamentosStore $event)
    {
        //
    }
}
