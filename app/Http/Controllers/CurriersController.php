<?php namespace App\Http\Controllers;

use App\Bolsa;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CurriersController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return View('curriers.index');
	}

	public function bolsas()
	{
		$bolsas = Bolsa::where('user_id', '=', Auth::id());

		return View('curriers.bolsas', compact('bolsas'));
	}

}
