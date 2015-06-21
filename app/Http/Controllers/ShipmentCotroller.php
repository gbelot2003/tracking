<?php namespace App\Http\Controllers;

use App\Establecimiento;
use App\Estado;
use App\Http\Requests\ShipmentsFormRequest;
use App\Shipment;
use App\Trader;
use App\Transito;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class ShipmentCotroller extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('ShipmentsCheckPerms', ['except' => ['show', 'create', 'store']]);
		$this->middleware('ShipmentsUserCheckPerms', ['only' => ['show']]);
		$this->id = Auth::id();
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{

		return View('shipments.index');
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create($fid)
	{

		/** Reconociemos si la entrada viene de perfil o de formulario de shipments */
		if($fid != 0){
			/** is biene de perfil, obtenemos el objeto trader **/
			$trader = Trader::find($fid);
			if($trader->estado->id != 1){
				/** Si el metodo estado->id no es 1 redireccionamos atras **/
				return redirect()->back();
			}
		}

		$user = User::findorFail($this->id);

		if($fid != 0){
			$sender_list 		= Trader::where('id', '=', $fid)->get();
		} elseif($fid == 0) {
			$sender_list 		= Trader::where('userstatus_id', '=', 1)->get();
		}
		$sender 			= $sender_list->lists('name', 'id');

		$reciver_list 		= Trader::where('userstatus_id', '=', 1)->get();
		$reciver 			= $reciver_list->lists('name', 'id');
		 		
		$estado = Estado::lists('name', 'id');
		$establecimiento = Establecimiento::where('empresa_id', '>=', '2')->lists('name', 'id');


		return View('shipments.create', compact('sender', 'reciver', 'estado', 'establecimiento', 'mesage'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param Request $request
	 * @return Response
	 */
	public function store(ShipmentsFormRequest $request)
	{
		DB::transaction(function() use ($request, &$data){
			$establecimiento = Auth::user()->establecimiento_id;
			$shipments = Shipment::create($request->all());
			$shipments->estado_id = $request->estado_id;
			$transito = Transito::create([
				'shipment_id'	=> $shipments->id,
				'estado_id'	 	=> $request->estado_id,
				'establecimiento_id' => $establecimiento,
				'user_id'	 	=> Auth::id(),
				'details'		=> 'Sin detalles'
			]);
			$shipments->update();

		});
		Session::flash('flash_message', 'El nuevo registro a sido creado');
		return redirect()->route('shipments.index');

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
		$cerrada = $paquete->estado_id;
		if ($cerrada == 8 or $cerrada == 9 or $cerrada == 10 or $cerrada == 11 or $cerrada == 12 or $cerrada == 13)
		{
			$bolsaCerrada = true;
		} else
		{
			$bolsaCerrada = false;
		}
		$paquete->with(['transitos' => function($q){
			$q->orderBy('id', 'desc')->get();
		}]);

		return View('shipments.show', compact('paquete', 'bolsaCerrada'));
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
		$estado = Estado::lists('name', 'id');
		$establecimiento = Establecimiento::where('empresa_id', '>=', '2')->lists('name', 'id');

		return View('shipments.edit', compact('paquete', 'sender', 'reciver', 'randnum', 'estado', 'establecimiento'));
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
