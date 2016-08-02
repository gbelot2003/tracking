<?php

namespace App\Http\Middleware;

use Closure;

class CheckUserStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->user()->userstatus_id >= 3){

            return response('Unauthorized.', 401);

        }
        elseif($request->user()->userstatus_id == 0){

            return response('Unauthorized.', 401);

        }
        elseif ($request->user()->userstatus_id == 2){

            return response('Unauthorized.', 401);

        } else {

            return $next($request);

        }

    }
}
