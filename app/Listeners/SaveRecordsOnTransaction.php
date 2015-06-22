<?php namespace App\Listeners;

use App\Bolsa;
use App\Event\SaveTransitosBolsas;

use App\Transito;
use App\TransitoBolsa;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class SaveRecordsOnTransaction {

	/**
	 * Create the event handler.
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
	 * @param  SaveTransitosBolsas  $event
	 * @return void
	 */
	public function handle(SaveTransitosBolsas $event)
	{

		DB::transaction(function() use ($event, &$data){

			$bolsas = bolsa::find($event->bolsas_id);
			$bolsas->estado_id = $event->request['estado_id'];

			foreach($bolsas->shipments as $shipment){
				Transito::create([
					'shipment_id' => $shipment->id,
					'bolsa_id' => $event->bolsas_id,
					'estado_id' => $event->estado_id,
					'establecimiento_id' => $event->establecimiento_id,
					'details' => $event->details,
					'user_id' => $event->user,
					'firma' => $event->firma,
					'foto' => $event->foto
				]);
				// Cambiamos estado paquetes
				$shipment->estado_id = $event->estado_id;
				$shipment->firma =  $event->user;
				$shipment->user_id = Auth::id();
				// Salvamos cambios paquetes
				$shipment->update();
			}

			$bolsas->save();

			TransitoBolsa::create([
				'bolsa_id' => $event->bolsas_id,
				'estado_id' => $event->request['estado_id'],
				'establecimiento_id' => $event->establecimiento_id,
				'details' => $event->details,
				'user_id' => $event->user,
				'firma' => $event->firma,
				'foto' => $event->foto
			]);
		});

		Session::flash('flash_message', 'Transito creado');
	}

}
