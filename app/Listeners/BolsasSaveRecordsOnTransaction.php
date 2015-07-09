<?php namespace App\Listeners;

use App\Bolsa;
use App\Event\SaveBolsas;

use App\Transito;
use App\TransitoBolsa;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class BolsasSaveRecordsOnTransaction {

	/**
	 * Handle the event.
	 *
	 * @param  SaveBolsas  $event
	 * @return void
	 */
	public function handle(SaveBolsas $event)
	{
		DB::transaction(function() use ($event, &$data){

			$event->bolsas = Bolsa::create([
				'code' => $event->request['code'],
				'establecimiento_envio_id' =>  Auth::user()->establecimiento_id,
				'establecimiento_recive_id' => $event->request['destino_id'],
				'estado_id'	=> 3,
				'user_id'	=>Auth::id(),
			]);


			$event->transitoBolsas = TransitoBolsa::create([
				'bolsa_id' => $event->bolsas->id,
				'estado_id' => 3,
				'establecimiento_id' => Auth::user()->establecimiento_id,
				'user_id' => Auth::id(),
				'details' => 'Bolsa creada'
			]);

			for($i = 0; $i < $event->count; $i++){
				$event->transito = Transito::create([
					'shipment_id' => $event->shipments_id[$i],
					'estado_id' => 4,
					'establecimiento_id' => Auth::user()->establecimiento_id,
					'user_id'	=> Auth::id()
				]);
				DB::table('shipments')->where('id', $event->shipments_id[$i])->update([
					'estado_id' => 4,
					'transito_id' => $event->transito->id
				]);

				$event->bolsas->shipments()->attach($event->shipments_id[$i]);
			}
		});

		Session::flash('flash_message', "Bolsa Creada");

	}


}
