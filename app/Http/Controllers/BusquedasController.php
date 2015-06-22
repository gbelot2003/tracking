<?php namespace App\Http\Controllers;

use App\bolsa;
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

		if($shipment = Shipment::where('code', '=', $code)->first()){
			$id = $shipment->id;
		} else {
			$id = null;
		}



		if (!isset($shipment->code))
		{
			$bolsa = bolsa::where('code', '=', $code)->first();
			if(isset($bolsa)){
				$bid = $bolsa->id;
			} else{
				return redirect()->back()->with('flash_message', 'no hay resultados con esa busquedas');
			}


			if (!$code == $bolsa->code)
			{
				return View('busquedas.busquedarapida');
			} else
			{
				return redirect(action('BolsasController@edit', $bid));
			}

		} else
		{
			return redirect(action('ShipmentCotroller@show', $id));
		}
	}

}
