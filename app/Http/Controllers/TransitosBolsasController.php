<?php namespace App\Http\Controllers;

use App\Bolsa;
use App\Event\SaveTransitosBolsas;
use App\Http\Requests;
use App\Transito;
use App\TransitoBolsa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class TransitosBolsasController extends Controller {

	public function __construct(){
		$this->middleware('auth');
	}

	public function index($id)
	{
		$transitos = TransitoBolsa::latest()->where('bolsa_id', '=', $id)->get();
		return View('transitosbolsas.index', compact('transitos'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create($id)
	{
		$bolsa = Bolsa::findOrFail($id);
		$estado = [
			'7' => 'Entragada a terceros',
			'8' => 'Extraviado',
			'9' => 'Robado',
			'11' => 'Entragado',
			'12' => 'Entragado con observaciones',
			'15' => 'Entregada (Bolsa en Centros de acopio)'
		];
		return View('transitosbolsas.create', compact('bolsa', 'estado'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{
		$user = Auth::user();
		event(new SaveTransitosBolsas($request->all(), $user));
		return redirect()->route('bolsas.edit',$request->input('bolsa_id'));
	}

}
