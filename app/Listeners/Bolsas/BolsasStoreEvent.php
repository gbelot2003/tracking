<?php

namespace App\Listeners\Bolsas;

use App\Events\BolsasStore;
use App\Bolsa;
use App\TransitoBolsa;

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
        $bolsas = Bolsa::create($event->request->all());
        TransitoBolsa::create([
            'bolsa_id' => $bolsas->id,
            'estado_id' => 1,
            'establecimiento_id' => $event->request['establecimiento_id'],
            'user_id'	 	=> 1,
            'details' => 'Bolsa Creada'
        ]);

        return $bolsas;
    }
}
