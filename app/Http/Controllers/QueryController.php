<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Municipio;
use App\Trader;

class QueryController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function getMunicipios($id)
	{
		$municipios = Municipio::where('departamento_id', '=', $id)->Lists('municipio', 'id');
		return View('querys.municipios', compact('municipios'));
	}

	public function getTraderlocation($id)
	{
		$traders = Trader::where('establecimiento_id', '=', $id)->where('userstatus_id', '=', '1')->get();
		$lists = $traders->Lists('name', 'id');

		return View('querys.traderlocation', compact('lists'));
	}

	public function getBusquedaPaquete()
	{
		return View('busquedas.encomienda');
	}

}
