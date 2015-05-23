<?php namespace App\Http\Middleware;

use Closure;

class HomeRolesCheck {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		if($request->user()->hasRole('owner')){
			return redirect('shipments');
		}

		if($request->user()->hasRole('cliente')){
			return redirect('mis-paquetes');
		}

		return $next($request);
	}

}
