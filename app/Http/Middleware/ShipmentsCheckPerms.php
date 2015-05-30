<?php namespace App\Http\Middleware;

use Closure;

class ShipmentsCheckPerms {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		if(!$request->user()->hasRole(['owner', 'admin', 'supervisor', 'centro-acopio', 'currier'])) {
			return redirect()->back();
		}
		return $next($request);
	}

}
