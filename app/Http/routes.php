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
Entrust::routeNeedsRole('roles', 'owner', Redirect::to('/home'));
Entrust::routeNeedsRole('roles/*', 'owner', Redirect::to('/home'));

Route::resource('permisos', 'PermissionsController');
Entrust::routeNeedsRole('permisos', 'owner', Redirect::to('/home'));
Entrust::routeNeedsRole('permisos/*', 'owner', Redirect::to('/home'));

Route::resource('user', 'UserController');
Entrust::routeNeedsRole('user', 'owner', Redirect::to('/home'));
Entrust::routeNeedsRole('user/*', 'owner', Redirect::to('/home'));

Route::get('listado/usuarios', 'ListadosController@usuarios');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);
