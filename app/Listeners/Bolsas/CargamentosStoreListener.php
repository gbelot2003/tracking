<?php

namespace App\Listeners\Bolsas;

use App\Events\CargamentosStore;
use App\Bolsa;
use App\Transito;
use App\TransitoBolsa;
use Illuminate\Support\Facades\Auth;

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
