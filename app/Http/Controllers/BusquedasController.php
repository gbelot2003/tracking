<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Shipment;
use Illuminate\Http\Request;

class BusquedasController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function getBusquedaRapida(Request $request)
	{
		$code = $request->input('code');
		$shipment = Shipment::where('code', '=', $code)->get();
		$scode = $shipment->code;
		$id = $shipment->id;

		return View('busquedas.busquedarapida', compact('scode'));
		/**
		 * if($code === $scode){
		 * return redirect(action('ShipmentController@show', $id));
		 * } else {
		 * return View('busquedas.busquedarapida', compact('shipment'));
		 * }**/

	}

}
