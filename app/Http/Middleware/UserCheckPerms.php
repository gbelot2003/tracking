<?php namespace App\Http\Middleware;

use Closure;

class UserCheckPerms {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		if(!$request->user()->hasRole(['owner', 'admin'])){
			return response('Unauthorized.', 401);
		}
		return $next($request);
	}

}
