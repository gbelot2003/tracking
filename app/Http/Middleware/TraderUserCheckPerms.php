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
		$idTrader = $request->segments()[1];
		$trader = Trader::find($idTrader);
		$users = $trader->user;
		$ulis = array();
		foreach($users as $user):
			$ulis[] = $user->id;
		endforeach;

		if(!in_array($this->auth->id(), $ulis)){
			return redirect('home');
		}

		return $next($request);
	}

}
