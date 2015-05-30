<?php namespace App\Http\Middleware;

use App\Shipment;
use App\User;
use Closure;
use Illuminate\Auth\Guard;

class ShipmentsUserCheckPerms {

	/**
	 * The Guard implementation.
	 *
	 * @var Guard
	 */
	protected $auth;

	/**
	 * Create a new filter instance.
	 *
	 * @param  Guard  $auth
	 * @return void
	 */
	public function __construct(Guard $auth)
	{
		$this->auth = $auth;
	}

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		// Llamamos al shipments en cuestion
		$shipment = Shipment::find($request->segments()[1]);
		$senders	= $shipment->sender_id; // sacamos el del remitente
		$recivers 	= $shipment->reciver_id; // Sacamos el id del destinatario

		//Llamamos la coleccion de mi usuario
		$user = User::find($this->auth->id());

		// Sacamos lista de mis traders relacionados
		$ulist = [];
		foreach($user->traders as $trader){
			$ulist[] = $trader->id;
		}

		if(!$request->user()->hasRole(['owner', 'admin', 'supervisor', 'centro-acopio', 'currier'])) {
			if (!in_array($senders, $ulist))
			{
				if(!in_array($senders, $ulist)){
					return redirect()->back();
				}
			}
		}


		return $next($request);
	}

}
