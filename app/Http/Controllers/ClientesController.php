<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\User;
use Illuminate\Http\Request;

class ClientesController extends Controller {

	public function index()
	{
		$clientes = User::all();
		return View('clientes.index');
	}

	public function create()
	{

	}

	public function store()
	{

	}


}
