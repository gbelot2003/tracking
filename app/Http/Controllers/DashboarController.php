<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class DashboarController extends Controller {

	public function getIndex(){
		return View('dash.admin');
	}

}
