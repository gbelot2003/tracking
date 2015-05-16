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

Route::get('/', 'WelcomeController@index');

Route::get('home', 'HomeController@index');

Route::resource('roles', 'RolesController');

Route::resource('permisos', 'PermissionsController');

Route::resource('user', 'UserController');

Route::get('clientes', 'ClientesController@index');

route::get('mis-paquetes', 'PaquetesController@paquetes');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
	'listados' => 'ListadosController',
]);
