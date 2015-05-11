<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\User;
use Illuminate\Http\Request;

class ListadosController extends Controller {

	//Diferentes listado con json respond
	public function usuarios()
	{
		$user 	= User::all();
		$count 	= $user->count();
		return [ 'registers' => $count, 'data' => $user];
	}

}
