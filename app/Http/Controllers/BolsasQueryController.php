<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class BolsasQueryController extends Controller {

	/**
	 * Constructor de Permisos
	 */
	public function __construct()
	{
		$this->middleware('auth');
	}

	public function getShipmentStates($id){
		
	}
}
