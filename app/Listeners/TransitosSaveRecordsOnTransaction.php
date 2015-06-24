<?php namespace App\Listeners;

use App\Event\SaveTransitos;

use App\Transito;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldBeQueued;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class TransitosSaveRecordsOnTransaction {

	/**
	 * Handle the event.
	 *
	 * @param  SaveTransitos  $event
	 * @return void
	 */
	public function handle(SaveTransitos $event)
	{
		DB::transaction(function() use ($event, &$data){

			$transitos = Transito::create([
				'shipment_id' => $event->request['shipment_id'],
				'estado_id' => $event->request['estado_id'],
				'establecimiento_id' => $event->establecimiento,
				'user_id' => Auth::id(),
				'details' => $event->request['details'],
				'firma' => $event->firma,
				'foto' => $event->foto
			]);

			$event->shipment->estado_id = $event->request['estado_id'];
			$event->shipment->user_id = Auth::id();
			$event->shipment->transito_id = $transitos->id;
			$event->shipment->firma = $event->firma;
			$event->shipment->save();
		});
	}

}
