<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\TradersFormRequest;
use App\Trader;
use Illuminate\Http\Request;

class PersonalController extends Controller {

	/**
	 *
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
		//
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param TradersFormRequest $request
	 * @return Response
	 */
	public function store(TradersFormRequest $request)
	{
		$trader = Trader::create($request->all());
		$rtrader = 	Trader::with('establecimiento.municipio.departamento', 'seccion')->where('id', '=', $trader->id)->first();
		return $rtrader;
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$trader = Trader::with('establecimiento.municipio.departamento', 'seccion')->where('id', '=', $id)->first();
		return $trader;
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
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
