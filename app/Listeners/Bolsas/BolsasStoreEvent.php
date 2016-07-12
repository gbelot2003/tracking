<?php

namespace App\Listeners\Bolsas;

use App\Events\BolsasStore;
use App\Bolsa;
use App\TransitoBolsa;
use Illuminate\Support\Facades\Auth;

class BolsasStoreEvent
{

    /**
     * Handle the event.
     *
     * @param BolsasStore $event
     * @return static
     */
    public function handle(BolsasStore $event)
    {
        $event->request['user_id'] = Auth::id();
        $bolsas = Bolsa::create($event->request->all());
        TransitoBolsa::create([
            'bolsa_id' => $bolsas->id,
            'estado_id' => 1,
            'establecimiento_id' => Auth::user()->establecimiento_id,
            'user_id'	 	=> Auth::id(),
            'details' => 'Bolsa Creada'
        ]);
        return $bolsas;
    }
}
