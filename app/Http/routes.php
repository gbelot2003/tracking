<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('transito/bolsa/{id}', function($id){

	$transito = \App\Transito::where('shipment_id', '=', $id)->orderBy('id', 'DESC')->first();
	$transito->update([
		'estado_id' => 3,
		'establecimiento_id' => \Auth::user()->establecimiento_id,
		'details' => '',
	]);

});

Route::resource('roles', 'RolesController');

Route::resource('permisos', 'PermissionsController');

Route::resource('user', 'UserController');

Route::resource('secciones', 'SeccionesController');

Route::resource('establecimientos', 'EstablecimientosController');
Route::resource('api/establecimientos', 'ApiEstablecimientosController', ['only' => ['index', 'store']]);

Route::resource('personal', 'TraderController');
Route::resource('personas', 'PersonalController', ['only' => ['store', 'update', 'destroy']]); //cambiar a api/personal


Route::resource('bolsas', 'BolsasController');

Route::resource('shipments', 'ShipmentCotroller');
Route::get('shipments/create/{fid}', 'ShipmentCotroller@create');

Route::get('mis-encomiendas', 'CurriersController@index');

Route::get('mis-bolsas', 'CurriersController@bolsas');

Route::get('clientes', 'ClientesController@index');

route::get('mis-paquetes', 'PaquetesController@index');

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::get('transitos/create/{id}', 'TransitosController@create');
Route::post('transitos/store', 'TransitosController@store');

Route::get('bolsas/transitos/{id}', 'TransitosBolsasController@index');
Route::get('bolsas/transitos/create/{id}', 'TransitosBolsasController@create');
Route::post('bolsas/transitos/store', 'TransitosBolsasController@store');
Route::get('bolsas/reporte/{id}', 'BolsasController@reporte');

Route::resource('api/shipments', 'ApiShipmentController');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' 	=> 'Auth\PasswordController',
	'listados' 	=> 'ListadosController',
	'querys' => 'QueryController',
	'busquedas' => 'BusquedasController',
	'reportes' => 'ReportsController',
	'consultas/reportes' => 'ReportesQueryController',
	'dash' => 'DashboarController',
	'api/consultas' => 'DashQueryController'
]);
