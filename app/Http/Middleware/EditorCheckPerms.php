<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Session;

class EditorCheckPerms
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
        if(!$request->user()->hasRole(['owner', 'admin', 'centro-acopio', ])){
            Session::flash('flash_warning', 'No tienes permisos para acceder a esta sección!!');
            return response('Unauthorized.', 401);
        }
        return $next($request);
    }
}
