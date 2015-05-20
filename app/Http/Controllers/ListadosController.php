<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Municipio;
use App\Role;
use App\Trader;
use App\User;
use App\Establecimiento;
use App\Seccion;
use App\Cargo;
use Datatables;
use Illuminate\Http\Request;

class ListadosController extends Controller {

	public function __construct()
	{
		view()->share('controller', 'ListadosController.php');
	}

	/**
	 * Listado json de usuarios para vista User.index
	 * @return mixed
	 */
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

	public function getPersonal()
	{
		$traders = Trader::Select(
			[
				'traders.id',
				'traders.last_name',
				'traders.first_name',
				'establecimientos.name',
				'seccions.name as seccion',
				'cargos.name as cargo'
			])	->Join('establecimientos', 'establecimiento_id', '=', 'establecimientos.id')
				->join('seccions', 'seccion_id', '=', 'seccions.id')
				->join('cargos', 'cargo_id', '=', 'cargos.id');

		return Datatables::of($traders)
			->removeColumn('id')
			->addColumn('Operaciones', '<a href="{{ action(\'TraderController@show\', $id) }}">Detallar información</a>')
			->make(true);

	}

	/**
	 * Listado de respons json de municipios
	 * @param $depto
	 * @return mixed
	 */
	public function getMunicipios($depto)
	{
		$ndep = (int) $depto;
		return Municipio::select('id', 'municipio')
			->where('departamento_id', '=', $ndep)->get();
	}
}
