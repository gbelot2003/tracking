<?php namespace App\Http\Middleware;

use Closure;

class BolsasCheckPerms {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		if(!$request->user()->hasRole(['owner', 'admin', 'supervisor'])) {
			return redirect('mis-encomiendas');
		}
		return $next($request);
	}

}
