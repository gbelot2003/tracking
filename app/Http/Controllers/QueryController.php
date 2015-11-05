<?php namespace App\Http\Controllers;

use App\Empresa;
use App\Http\Requests;
use App\Municipio;
use App\Trader;

class QueryController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	/**
	 * @param $id
	 * @return \BladeView|bool|\Illuminate\View\View
	 */
	public function getMunicipios($id)
	{
		$municipios = Municipio::where('departamento_id', '=', $id)->Lists('municipio', 'id');
		return View('querys.municipios', compact('municipios'));
	}

	/**
	 * @param $id
	 * @return \BladeView|bool|\Illuminate\View\View
	 */
	public function getTraderlocation($id)
	{
		$traders = Trader::where('establecimiento_id', '=', $id)->where('userstatus_id', '=', '1')->get();
		$lists = $traders->Lists('name', 'id');

		return View('querys.traderlocation', compact('lists'));
	}

	/**
	 * @return \BladeView|bool|\Illuminate\View\View
	 */
	public function getBusquedaPaquete()
	{
		return View('busquedas.encomienda');
	}

}
