<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Requests\Request;
use App\Http\Requests\UsuariosFormRequest;
use App\Http\Controllers\Controller;
use Bican\Roles\Models\Role;
use App\User;
use Illuminate\Support\Facades\View;



class UserController extends Controller {

	/**
	 * Agregando middleware para proteccion de roles
	 *
	 * Logica de permisos aun no implementada
	 */
	public function __construct()
	{
		$this->middleware('auth');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$users = User::All();
		return View('users.index', compact('users'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return View('users.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(UsuariosFormRequest $request)
	{
		$user = User::create($request::all());
		return redirect('users');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$user 	= User::findorFail($id);
		return View('users.show', compact('user'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$user = User::findorFail($id);
		$roles 	= Role::Lists('name', 'id');
		return View('users.edit', compact('user', 'roles'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$user 	= User::findorFail($id);
		dd(Request::All());
		$user->update($request->all());
		//$user->attachRole($request->input('role_list'));
		return redirect('users');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
