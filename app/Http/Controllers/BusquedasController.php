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

		$shipment = Shipment::where('code', '=', $code)->first();
		$id = $shipment->id;

		if (!$code == $shipment->code)
		{
			$bolsa = bolsa::where('code', '=', $code)->first();
			$bid = $bolsa->id;
			if (!$code == $bolsa->code)
			{
				return View('busquedas.busquedarapida');
			} else
			{
				return redirect(action('BolsaCotroller@edit', $bid));
			}

		} else
		{
			return redirect(action('ShipmentCotroller@show', $id));
			//
		}
	}

}
