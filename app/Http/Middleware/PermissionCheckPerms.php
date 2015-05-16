<?php namespace App\Http\Middleware;

use Closure;

class PermissionCheckPerms {

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		if(!$request->user()->hasRole('owner')){
			if (!$request->user()->can('rol-full')){
				return redirect('home');
			}
		}
		return $next($request);
	}

}
