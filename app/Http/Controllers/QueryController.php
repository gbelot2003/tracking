<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Municipio;
use App\Trader;
use Illuminate\Http\Request;

class QueryController extends Controller {

	public function getMunicipios($id)
	{
		$municipios = Municipio::where('departamento_id', '=', $id)->Lists('municipio', 'id');
		return View('querys.municipios', compact('municipios'));
	}

	public function getTraderlocation($id)
	{
		$traders = Trader::where('establecimiento_id', '=', $id)->where('userstatus_id', '=', '1')->get();
		$lists = $traders->Lists('full_name', 'id');

		return View('querys.traderlocation', compact('lists'));
	}

}
