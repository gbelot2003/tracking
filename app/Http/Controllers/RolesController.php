<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Requests\RolesFormRequest;
use App\Http\Controllers\Controller;
use Bican\Roles\Models\Role;
use Illuminate\Support\Facades\View;

class RolesController extends Controller {


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
		return View('roles.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(RolesFormRequest $request)
	{

		Role::create($request->all());
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
		$roles = Role::findOrFail($id);
		return View('roles.show', compact('roles'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$roles = Role::findOrFail($id);
		return View('roles.edit', compact('roles'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(RolesFormRequest $request, $id)
	{
		$role = Role::findorFail($id);
		$role->update($request->all());
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
