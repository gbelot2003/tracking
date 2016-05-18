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

Route::get('/', function () {
    return view('index');
});

Route::group(['prefix' => 'api'], function()
{
    Route::resource('authenticate', 'AuthenticateController', ['only' => ['index']]);
    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::get('authenticate/user', 'AuthenticateController@getAuthenticatedUser');
    Route::get('authenticate/rol', 'AuthenticateController@getRolUser');
});

Route::group(['prefix' => 'api/admin'], function()
{

    Route::get('users/search/{search?}', 'UserController@search');

    Route::get('agencias/search/{seach?}', 'AgenciasController@search');
    Route::get('agencias/listado-search/{name?}', 'AgenciasController@listado');
    Route::get('agencias/single-search/{id}', 'AgenciasController@agencia');

    Route::get('secciones/id-search/{id}', 'SeccionesController@idSeach');
    Route::get('secciones/search/{seach?}', 'SeccionesController@search');
    Route::get('secciones/listado-search/{name?}', 'SeccionesController@listado');

    Route::get('clientes/search/{seach?}', 'ClientesController@search');
    Route::get('clientes/listado-search/{name?}', 'ClientesController@listado');

    Route::get('paquetes/search/{date?}/{search?}/{type?}', 'ShipmentsController@search');
    Route::get('paquetes/find-by-code/{code}/{bag}', 'ShipmentsController@getByCode');
    Route::get('paquetes/remove-by-code/{code}/{bag}/{index}/{type}', 'ShipmentsController@removeByCode');
    Route::get('paquetes/check-by-code/{code}', 'ShipmentsController@checkCode');
    Route::get('paquetes/check-state-by-code/{code}', 'ShipmentsController@checkStateByCode');
    Route::post('paquetes/updateBulks', 'ShipmentsController@updateBulks');

    Route::post('transitos/image-post/{id}', 'TransitosController@imagePost');
    Route::get('transitos/delete-image/{name}', 'TransitosController@imageRemove');

    Route::get('bolsas/search/{date?}/{search?}/{type?}', 'BolsasController@search');

    Route::post('bolsas-transitos/image-post/{id}', 'TransitosBolsasController@imagePost');
    Route::get('bolsas-transitos/delete-image/{name}', 'TransitosBolsasController@imageRemove');

    Route::get('municipios/relacionados/{id}', 'MunicipiosController@relacionados');

    Route::resource('users', 'UserController');
    Route::resource('permisos', 'RolesResourceController');
    Route::resource('agencias', 'AgenciasController');
    Route::resource('secciones', 'SeccionesController');
    Route::resource('clientes', 'ClientesController');
    Route::resource('paquetes', 'ShipmentsController');
    Route::resource('transitos', 'TransitosController');
    Route::resource('bolsas', 'BolsasController');
    Route::resource('bolsas-transitos', 'TransitosBolsasController');

});