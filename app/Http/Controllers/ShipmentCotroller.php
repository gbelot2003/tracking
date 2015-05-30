<?php namespace App\Http\Controllers;

use App\Estado;
use App\Http\Controllers\Controller;
use App\Http\Requests\ShipmentsFormRequest;
use App\Shipment;
use App\Trader;
use App\Transito;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;

class ShipmentCotroller extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('ShipmentsCheckPerms'); //configurar permisos de este middle !!! OJO
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{

		$paquetes = Shipment::orderBy('id', '=', 'Desc')->test()->get();

		return View('shipments.index', compact('paquetes'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		/**
		 * Definir una busqueda especifica en el formulario, para las personas a las que se
		 * se les enviara algun paquete o contenido
		 */
		$sender_list 		= Trader::all();
		$sender 			= $sender_list->lists('full_name', 'id');

		$reciver_list 		= Trader::all();
		$reciver 			= $reciver_list->lists('full_name', 'id');

		$estado = Estado::lists('name', 'id');

		// Vamos a generar un numero random por ahora
		$randnum = rand(100000000, 900000000);

		return View('shipments.create', compact('sender', 'reciver', 'randnum', 'estado'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param Request $request
	 * @return Response
	 */
	public function store(ShipmentsFormRequest $request)
	{
		$shipments = Shipment::create($request->all());

		$transito = Transito::create([
			'shipment_id'	=> $shipments->id,
			'estado_id'	 	=> $shipments->estado,
			'user_id'	 	=> Auth::id(),
			'details'		=> 'Sin detalles'
		]);
		Session::flash('flash_message', 'El nuevo registro a sido creado');
		return redirect()->route('shipments.show', $shipments->id);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$paquete = Shipment::findOrFail($id);
		$paquete->with(['transitos' => function($q){
			$q->orderBy('id', 'desc')->get();
		}]);
		return View('shipments.show', compact('paquete'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$paquete = Shipment::findOrFail($id);
		$randnum = $paquete->code;
		$sender_list 		= Trader::all();
		$sender 			= $sender_list->lists('full_name', 'id');

		$reciver_list 		= Trader::all();
		$reciver 			= $reciver_list->lists('full_name', 'id');
		return View('shipments.edit', compact('paquete', 'sender', 'reciver', 'randnum'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(ShipmentsFormRequest $request, $id)
	{
		$paquete = Shipment::findOrFail($id);
		$paquete->update($request->all());
		Session::flash('flash_message', 'El registro a sido editado');
		return redirect()->route('shipments.show', $paquete->id);

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
