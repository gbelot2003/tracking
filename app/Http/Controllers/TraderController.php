<?php namespace App\Http\Controllers;

use App\Establecimiento;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Http\Requests\TradersFormRequest;
use App\Shipment;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Seccion;
use App\Trader;
use App\User;
use Illuminate\Http\Request;

class TraderController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('TraderCheckPerms', ['except' => ['show']]);
		$this->middleware('TraderUserCheckPerms', ['only' => ['show']]);
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
		$establecimiento = Establecimiento::Lists('name', 'id');
		$secciones = Seccion::Lists('name', 'id');

		return View('trader.create', compact('establecimiento', 'secciones', 'cargo'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(TradersFormRequest $request)
	{
		$trader = Trader::create($request->all());
		Session::flash('flash_message', 'El nuevo registro a sido creado');
		return redirect()->route('personal.show', $trader->id);
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
		$sender = Shipment::where('sender_id', '=', $id)->test()->get();
		$reciber = Shipment::where('reciber_id', '=', $id)->test()->get();
		$users = $trader->user;
		return View('trader.show', compact('trader', 'sender', 'reciber', 'users'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$trader = Trader::findOrFail($id);
		$establecimiento = Establecimiento::lists('name', 'id');
		$secciones = Seccion::lists('name', 'id');
		return View('trader.edit', compact('trader', 'establecimiento', 'secciones', 'cargo'));
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(TradersFormRequest $request, $id)
	{
		$trader = Trader::findOrFail($id);
		$trader->update($request->all());
		Session::flash('flash_message', 'El nuevo a sido editado');
		return redirect()->route('personal.show', $trader->id);
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
