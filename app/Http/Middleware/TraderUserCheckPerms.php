<?php namespace App\Http\Middleware;

use App\Trader;
use Closure;
use Illuminate\Auth\Guard;

class TraderUserCheckPerms {
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
		// llamamos argumento de request
		$idTrader = $request->segments()[1];

		//Llamamos la tabla con la relación
		$trader = Trader::find($idTrader);

		//Buscamos los registros relacionados
		$users = $trader->user;

		// Agregamos los registros relacionados en un array
		$ulis = [];
		foreach($users as $user):
			$ulis[] = $user->id;
		endforeach;

		if(!$request->user()->hasRole(['owner', 'admin', 'supervisor', 'centro-acopio', 'currier'])) {
			// usamos in_array para revisar si algun registro
			// coinside, si es si -> seguimos si no, redireccion
			// a donde comenzo el check o homepage
			if (!in_array($this->auth->id(), $ulis))
			{
				return redirect()->back();
			}
		}

		return $next($request);
	}

}
