<?php namespace App\Http\Controllers;

use App\Departamento;
use App\Empresa;
use App\Establecimiento;
use App\Http\Controllers\Controller;

use App\Http\Requests\EstablecimientosFormRequest;
use App\Municipio;
use App\Testablecimiento;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;

class EstablecimientosController extends Controller {


	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('EstablecimientosCheckPerms');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{

		if(Auth::user()->hasRole(['centro-acopio', 'currier', 'cliente'])){
			$establecimientos = Establecimiento::where('empresa_id', '=', 1)->get();
		} else {
			$establecimientos = Establecimiento::all();
		}
		return View('establecimientos.index', compact('establecimientos'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$departamentos = Departamento::lists('departamento', 'id');
		$municipios = Municipio::lists('municipio', 'id');
		$tipo =	Empresa::listado()->lists('name', 'id');
		return View('establecimientos.create', compact('departamentos', 'municipios', 'tipo'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param EstablecimientosFormRequest $request
	 * @return Response
	 */
	public function store(EstablecimientosFormRequest $request)
	{
		$establecimientos = Establecimiento::create($request->all());
		Session::flash('flash_message', 'El establecimiento a sido agregado');
		return redirect('establecimientos');
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
		$establecimiento = Establecimiento::findOrFail($id);
		$departamentos = Departamento::lists('departamento', 'id');
		$municipios = Municipio::lists('municipio', 'id');
		$tipo =	Empresa::listado()->lists('name', 'id');
		return View('establecimientos.edit', compact('establecimiento', 'departamentos', 'municipios', 'tipo'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(EstablecimientosFormRequest $request, $id)
	{
		$establecimiento = Establecimiento::findOrFail($id);
		$establecimiento->update($request->all());
		Session::flash('flash_message', 'El establecimiento a sido editado');
		return redirect('establecimientos');
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
