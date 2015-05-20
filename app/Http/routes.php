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

Route::resource('roles', 'RolesController');

Route::resource('permisos', 'PermissionsController');

Route::resource('user', 'UserController');

Route::resource('secciones', 'SeccionesController');

Route::resource('cargos', 'CargosController');

Route::resource('establecimientos', 'EstablecimientosController');

/** IMPORTANTE, para fines practicos y de menos confución en el codigo
 * y el front-end y ademas por la similitud con usuarios, TraderController
 * se designara como personal en las rutas y titulos **/

Route::get('personal', 'TraderController@index');

Route::get('personal/create', 'TraderController@create');

Route::get('personal/{$id}/edit', 'TraderController@edit');

Route::get('personal/show/{$id}', 'TraderController@show');


Route::get('clientes', 'ClientesController@index');

route::get('mis-paquetes', 'PaquetesController@paquetes');

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
	'listados' => 'ListadosController',
]);
