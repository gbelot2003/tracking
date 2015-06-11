<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Municipio;
use App\Role;
use App\Shipment;
use App\Trader;
use App\Transito;
use App\User;
use App\Establecimiento;
use App\Seccion;
use App\Cargo;
use Datatables;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

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
			->addColumn('Nombre','<a href="{{ action(\'UserController@show\', $id) }}">{{ $name }}</a>')
			->addColumn('E-Mail','{{ $email }}')
			->addColumn('Roles', '{{ $rolname }}')
			->make();
	}

	/**
	 * @return mixed
	 */
	public function getPersonal()
	{

			$traders = Trader::Select(
				[
					'traders.id',
					'traders.last_name',
					'traders.first_name',
					'establecimientos.name',
					'seccions.name as seccion',
					'userstatuses.name as estado'
				])->Join('establecimientos', 'establecimiento_id', '=', 'establecimientos.id')
				->join('seccions', 'seccion_id', '=', 'seccions.id')
				->Join('userstatuses', 'userstatus_id', '=', 'userstatuses.id');


		return Datatables::of($traders)->make(true);

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

	/**
	 * @param $empresa_id
	 * @return View
	 */
	public function getEstablecimientos($empresa_id)
	{

		$empresa = (int) $empresa_id;
		if($empresa === 1){ //si la empresa es unidos expres
			$establecimiento = Establecimiento::where('empresa_id', '!=', 2);
		} else {
			$establecimiento = Establecimiento::where('empresa_id', '=', $empresa);
		}

		$listado = $establecimiento->Lists('name', 'id');
		return View('listados/establecimientos', compact('listado'));
	}

	/**
	 * @return mixed
	 */
	public function getShipments()
	{
		/**
		 * Query de busqueda de eccomiendas principa
		 * recuperacion via ajax
		 * @var $traders */
		$traders = Shipment::select([
									'shipments.id',
									'shipments.code',
									'sender.id as sid',
									'sender.last_name as sender_last',
									'sender.first_name as sender_first',
									'aestab.name as sender_agen',
									'aseccion.name as sender_section',
									'reciber.id as rid',
									'reciber.last_name as reciber_last',
									'reciber.first_name as reciber_first',
									'bestab.name as reciber_agen',
									'bseccion.name as reciber_section',
									'shipments.description as description',
									])
									->distinct()
									->Join('traders as sender', 'sender_id', '=', 'sender.id')
									->Join('traders as reciber', 'reciber_id', '=', 'reciber.id')
									->Join('establecimientos as aestab', 'sender.establecimiento_id', '=', 'aestab.id')
									->Join('establecimientos as bestab', 'reciber.establecimiento_id', '=', 'bestab.id')
									->Join('seccions as aseccion', 'aseccion.id', '=', 'sender.seccion_id')
									->Join('seccions as bseccion', 'bseccion.id', '=', 'reciber.seccion_id')
									->orderBy('shipments.id', '=', 'ASC')
									->get();
		return Datatables::of($traders)
			->make(true);
	}

	public function getContenidoBolsas()
	{
		$centro_acopio = Auth::user()->establecimiento_id;

		/**
		 * Query de busqueda de eccomiendas principa
		 * recuperacion via ajax
		 * @var $traders */
		$traders = Shipment::select([
			'shipments.id',
			'shipments.code',
			'sender.id as sid',
			'sender.last_name as sender_last',
			'sender.first_name as sender_first',
			'aestab.name as sender_agen',
			'aseccion.name as sender_section',
			'reciber.id as rid',
			'reciber.last_name as reciber_last',
			'reciber.first_name as reciber_first',
			'bestab.name as reciber_agen',
			'bseccion.name as reciber_section',
			'shipments.description as description',
		])
			->where('shipments.estado', '=', 2)
			->distinct()
			->Join('traders as sender', 'sender_id', '=', 'sender.id')
			->Join('traders as reciber', 'reciber_id', '=', 'reciber.id')
			->Join('establecimientos as aestab', 'sender.establecimiento_id', '=', 'aestab.id')
			->Join('establecimientos as bestab', 'reciber.establecimiento_id', '=', 'bestab.id')
			->Join('seccions as aseccion', 'aseccion.id', '=', 'sender.seccion_id')
			->Join('seccions as bseccion', 'bseccion.id', '=', 'reciber.seccion_id')
			->orderBy('shipments.id', '=', 'ASC')
			->get();
		return Datatables::of($traders)
			->make(true);
	}

	/**
	 * @param $shipments
	 * @return View
	 */
	public function getShipmentstate($shipments)
	{
		$transitos = Transito::where('shipment_id', '=', $shipments)->get();
		return View('listados.shipmentstate', compact('transitos'));
	}

	/**
	 * @return View
	 */
	public function getListadosPersonas()
	{
		return View('trader.listado');
	}
}
