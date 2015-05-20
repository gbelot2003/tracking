<?php namespace App\Http\Controllers;

use App\Cargo;
use App\Establecimiento;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Seccion;
use App\Trader;
use Illuminate\Http\Request;

class TraderController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('TraderCheckPerms');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return View('trader.index', compact('traders'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		$establecimentos = Establecimiento::lists('name', 'id');
		$secciones = Seccion::lists('name', 'id');
		$cargo = Cargo::lists('name', 'id');

		return View('trader.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$trader = Trader::findOrFail($id);
		return View('trader.show', compact('trader'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		return View('trader.edit');
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
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
