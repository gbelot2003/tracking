<?php namespace App\Http\Controllers;

use App\Http\Requests\SeccionesFormRequest;
use Illuminate\Support\Facades\Session;
use Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Seccion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Validator;

class SeccionesController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('SeccionesCheckPerms');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$seccion = Seccion::all();
		return View('secciones.index', compact('seccion'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		return View('secciones.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(SeccionesFormRequest $request)
	{
		$seccion = Seccion::create($request->all());
		Session::flash('flash_message', 'La sección a sido creado');
		return redirect('secciones');
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
		$seccion = Seccion::findOrFail($id);
		return View('secciones.edit', compact('seccion'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(SeccionesFormRequest $request, $id)
	{
		$seccion = Seccion::findOrFail($id);
		$seccion->update($request->all());
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
