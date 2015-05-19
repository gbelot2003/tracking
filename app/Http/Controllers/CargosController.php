<?php namespace App\Http\Controllers;

use App\Cargo;
use App\Http\Controllers\Controller;
use App\Http\Requests\CargosFormRequest;
use Illuminate\Support\Facades\View;
use Requests;

class CargosController extends Controller {

	
	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('CargosCheckPerms');
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$cargos = Cargo::all();
		return View('cargos.index', compact('cargos'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return View('cargos.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(CargosFormRequest $request)
	{
		$cargo = Cargo::create($request->all());
		Session::flash('flash_message', 'El cargo a sido creado');
		return redirect('cargos');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$cargo = Cargo::findOrFail($id);
		return View('cargos.edit', compact('cargo'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(CargosFormRequest $request, $id)
	{
		$cargo = Cargo::findOrFail($id);
		$cargo->update($request->all());
		Session::flash('flash_message', 'La sección a sido editada');
		return redirect('secciones');
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
