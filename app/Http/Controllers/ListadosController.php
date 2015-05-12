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
		$users = User::Select(['users.id', 'users.name', 'users.email', 'roles.name as rolname'])
						->Join('role_user', 'users.id', '=', 'role_user.user_id')
						->Join('roles', 'role_user.role_id', '=', 'roles.id');
		return Datatables::of($users)
			->removeColumn('id')
			->removeColumn('name')
			->removeColumn('email')
			->removeColumn('rolname')
			->addColumn('Nombre','<a href="{{ action(\'UserController@edit\', $id) }}">{{ $name }}</a>')
			->addColumn('E-Mail','{{ $email }}')
			->addColumn('Roles', '{{ $rolname }}')
			->make();
	}

}
