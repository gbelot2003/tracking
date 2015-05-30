<?php namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Guard;

class UserUserCheckPerms {
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
		if(!$request->user()->hasRole(['owner', 'admin', 'supervisor'])){
			if($this->auth->id() != $request->segments()[1])
			{
				return redirect()->back();
			}
		}
		return $next($request);

	}

}
