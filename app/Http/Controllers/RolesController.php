<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\RolesFormRequest;
use App\Permission;
use App\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\View;

class RolesController extends Controller {

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
		$roles->attachPermissions($request->input('perms_lists'));
		flash('El nuevo rol a sido salvado');
		return redirect('roles')->with('flash_message');
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
		//flash('La información del rol a sido actualizada');
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
