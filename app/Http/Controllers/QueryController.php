<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Municipio;
use Illuminate\Http\Request;

class QueryController extends Controller {

	public function getMunicipios($id)
	{
		$municipios = Municipio::where('departamento_id', '=', $id)->Lists('municipio', 'id');
		return View('querys.municipios', compact('municipios'));
	}

}
