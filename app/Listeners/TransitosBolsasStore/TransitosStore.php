<?php

namespace App\Listeners\TransitosBolsasStore;

use App\Events\TransitosBolsasStore;
use App\Bolsa;
use App\Transito;
use App\TransitoBolsa;
use Illuminate\Support\Facades\Auth;

class TransitosStore
{

    /**
     * Handle the event.
     *
     * @param  TransitosBolsasStore  $event
     * @return void
     */
    public function handle(TransitosBolsasStore $event)
    {
        $event->request['user_id'] = Auth::Id();

        $estado = $event->request['estado_id'];
        $cierres = [8, 9, 11, 12, 13];

        if(in_array($estado, $cierres)){
            $transito = TransitoBolsa::create($event->request->all());
            if ($estado == 8 || $estado == 9 || $estado == 13){
                $pstado = $estado;
            } else if($estado == 11 || $estado == 12){
                $pstado = 3;
            }

            $bolsa = Bolsa::findOrFail($event->request['bolsa_id']);
            $paquetes = $bolsa->shipments;
            foreach($paquetes as $paquete){
                Transito::create([
                    'shipment_id' => $paquete->id,
                    'estado_id' => $pstado,
                    'establecimiento_id' => Auth::user()->establecimiento_id,
                    'user_id'   => $event->request['user_id'],
                    'details'   => 'Registro agregado desde transto de bolsa No.' . $bolsa->code . " - " . $event->request['details']
                ]);
            }
        } else {
            $transito = TransitoBolsa::create($event->request->all());
        }
    }
}
