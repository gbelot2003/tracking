<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\RolesFormRequest;
use App\Permission;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Html\FormFacade;

class RolesController extends Controller {


	public function __contruct()
	{
		$this->middleware('owner');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$roles = Role::all();
		return View('roles.index', compact('roles'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{

		$perms = Permission::Lists('name', 'id');
		return View('roles.create', compact('perms'));

	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(RolesFormRequest $request)
	{

		$roles = Role::create($request->all());
		Session::flash('flash_message', 'El Rol a sido creado');
		return redirect('roles');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return View('roles.show');
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param RolesFormRequest $request
	 * @param  int $id
	 * @return Response
	 */
	public function edit($id)
	{
		$roles = Role::find($id);
		$perms = Permission::Lists('name', 'id');
		$users = $roles->users;
		return View('roles.edit', compact('roles', 'perms', 'users'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(RolesFormRequest $request, $id)
	{
		$roles = Role::findOrFail($id);
		$roles->update($request->all());
		$roles->perms()->sync($request->input('perms_lists'));
		Session::flash('flash_message', 'El Rol a sido editado correctamente');
		return redirect('roles');
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
