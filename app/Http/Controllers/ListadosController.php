<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\User;
use Datatables;
use Illuminate\Http\Request;

class ListadosController extends Controller {

	public function __construct()
	{
		view()->share('controller', 'ListadosController.php');
	}

	public function getUsuarios()
	{
		return View('listados.usuarios');
	}

	//Diferentes listado con json respond
	public function getUsuariosData()
	{
		$users = User::select(['id', 'name', 'email']);
		return Datatables::of($users)->make();
	}

}
