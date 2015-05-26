<?php namespace App\Http\Middleware;

use Closure;

class RoleCheckPerms {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		if(!$request->user()->hasRole(['owner', 'admin'])) {
			return redirect('home');
		}
		return $next($request);

	}


}
