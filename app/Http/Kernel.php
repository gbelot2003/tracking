<?php namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel {

	/**
	 * The application's global HTTP middleware stack.
	 *
	 * @var array
	 */
	protected $middleware = [
		'Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode',
		'Illuminate\Cookie\Middleware\EncryptCookies',
		'Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse',
		'Illuminate\Session\Middleware\StartSession',
		'Illuminate\View\Middleware\ShareErrorsFromSession',
		'App\Http\Middleware\VerifyCsrfToken',
	];

	/**
	 * The application's route middleware.
	 *
	 * @var array
	 */
	protected $routeMiddleware = [
		'auth' 							=> 'App\Http\Middleware\Authenticate',
		'auth.basic' 					=> 'Illuminate\Auth\Middleware\AuthenticateWithBasicAuth',
		'guest' 						=> 'App\Http\Middleware\RedirectIfAuthenticated',
		'CargosCheckPerms' 				=> 'App\Http\Middleware\CargosCheckPerms',
		'EstablecimientosCheckPerms'	=> 'App\Http\Middleware\EstablecimientosCheckPerms',
		'SeccionsCheckPerms'			=> 'App\Http\Middleware\SeccionsCheckPerms',
		'UserCheckPerms' 				=> 'App\Http\Middleware\UserCheckPerms',
		'RoleCheckPerms' 				=> 'App\Http\Middleware\RoleCheckPerms',
		'PermissionCheckPerms'			=> 'App\Http\Middleware\PermissionCheckPerms',
		'TraderCheckPerms'				=> 'App\Http\Middleware\TraderCheckPerms',
		'TraderUserCheckPerms'			=> 'App\Http\Middleware\TraderUserCheckPerms',
		'PaquetesCheckPerms'			=> 'App\Http\Middleware\PaquetesCheckPerms',
		'ShipmentsCheckPerms'			=> 'App\Http\Middleware\ShipmentsCheckPerms',
		'homecheck'						=> 'App\Http\Middleware\HomeRolesCheck',
	];

}
