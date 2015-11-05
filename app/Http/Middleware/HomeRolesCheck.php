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
		if($request->user()->hasRole(['owner', 'admin', 'supervisor'])){

			return redirect('dash');

		} elseif($request->user()->hasRole(['centro-acopio', 'currier'])){

			return redirect('dash');

		} elseif($request->user()->hasRole('cliente')) {

			return redirect('mis-paquetes');
		}

		return $next($request);
	}

}
