<?php namespace App\Http\Controllers;

use App\Http\Requests\UserFormRequest;
use App\Http\Controllers\Controller;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;

class UserController extends Controller {

	/**** Recordatorio importante ******/
    /**  Hay que crear un metodo en el cual
	/**  se crea automaticamente un password
	 y este se envia directamente al correo
	 del usuario que se esta creando   **/


	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('UserCheckPerms');
		$this->pageTitle = 'Configuración de Usuarios';
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return View('user.index', compact('users'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$roles = Role::Lists('display_name', 'id');
		return View('user.create', compact('roles'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(UserFormRequest $userFormData)
	{

		$userFormData['password'] = bcrypt($userFormData['password']);
		$user = User::create($userFormData->all());
		$user->roles()->attach($userFormData->input('roles_lists')); // id only
		Session::flash('flash_message', 'El usuario a sido creado');
		return redirect('user');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{

	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$user = User::findOrFail($id);
		$roles = Role::Lists('display_name', 'id');
		return View('user.edit', compact('user', 'roles'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(UserFormRequest $userFormData, $id)
	{
		$user = User::findOrFail($id);

		if(isset($userFormData['password'])):
			$userFormData['password'] = bcrypt($userFormData->input('password'));
		else:
			$userFormData['password'] = $user->password;
		endif;

		$user->update($userFormData->input());
		$user->roles()->sync($userFormData->input('roles_lists'));
		Session::flash('flash_message', 'El usuario a sido editado correctamente');
		return redirect('user');
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
