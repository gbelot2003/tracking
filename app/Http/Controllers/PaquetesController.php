<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Shipment;
use App\Trader;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaquetesController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('PaquetesCheckPerms');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$user = User::find(Auth::id());
		$clientes = $user->traders;
		return View('paquetes.paquetes', compact('clientes'));
	}

	public function relacionados()
	{

	}
}
