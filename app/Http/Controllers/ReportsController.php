<?php namespace App\Http\Controllers;

use App\Establecimiento;
use App\Estado;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Shipment;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReportsController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function getReportesEntregas()
	{

		$establecimiento = Establecimiento::where('empresa_id', '!=', '1')->lists('name', 'id');
		$estados = Estado::take(12)->skip(1)->lists('name', 'id');

		return View('reportes.entregas.entregas', compact('establecimiento', 'estados', 'shipments', 'btransitos'));
	}

	public function getRowsReporte($date_init, $date_finale, $state = 0, $stablish = 0)
	{

		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();


		if($state != 0 and $stablish == 0){

			$shipments = Shipment::with( 'estados', 'recivers.establecimiento', 'senders.establecimiento', 'btransitos')
				->whereBetween('updated_at', [$bdate, $edate])
				->where('estado_id', '=', $state)
				->get();

		} elseif($state != 0 and $stablish != 0){
			$shipments = Shipment::with( 'estados', 'recivers.establecimiento', 'senders.establecimiento', 'btransitos')
				->whereBetween('updated_at', [$bdate, $edate])
				->whereHas('recivers', function($q) use (&$data, $stablish) {
					$q->where('establecimiento_id', '=', $stablish);
				})
				->where('estado_id', '=', $state)->get();

		} elseif($state == 0 and $stablish != 0){

			$shipments = Shipment::with( 'estados', 'recivers.establecimiento', 'senders.establecimiento', 'btransitos')
				->whereBetween('updated_at', [$bdate, $edate])
				->whereHas('recivers', function($q) use (&$data, $stablish) {
					$q->where('establecimiento_id', '=', $stablish);
				})->get();


		} else{

			$shipments = Shipment::with( 'estados', 'recivers.establecimiento', 'senders.establecimiento', 'btransitos')
				->whereBetween('updated_at', [$bdate, $edate])->get();

		}

		return $shipments;

	}

	public function getRowReportesEntregados($date_init, $date_finale)
	{
		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();
		$range = [$bdate, $edate];

		//dd($bdate ." " . $edate);
		$shipments = Shipment::with('estados', 'recivers.establecimiento', 'senders.establecimiento',  'btransitos')
			->whereBetween('updated_at', [$bdate, $edate])
			->whereIn('estado_id', array(11, 12, 13))
			->get();

		return $shipments;
	}

	public function getRowReportesErrores($date_init, $date_finale)
	{
		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();

		$shipments = Shipment::with('estados', 'recivers.establecimiento', 'senders.establecimiento',  'btransitos')
			->whereBetween('updated_at', [$bdate, $edate])
			->whereIn('estado_id', array(8, 9, 10))
			->get();

		return $shipments;
	}

	public function getReporteUsuarios()
	{
		$user = User::where('userstatus_id', '=', 1)
			->whereHas('roles', function($query){
				$query->where('id', '!=', 1);
			})
			->where('empresa_id', '=', 1)
			->get();
		return View('reportes.usuarios.usuarios', compact('user'));
	}

	public function getReporteUsuariosDetalle($id)
	{
		$user = User::findOrFail($id);
		$estados = Estado::take(12)->skip(1)->lists('name', 'id');

		return View('reportes.usuarios.detalle', compact('user', 'estados'));
	}

	public function getReportesUsuariosRows($id, $date_init, $date_finale)
	{
		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();

		$shipments = Shipment::with('estados', 'senders.establecimiento', 'recivers.establecimiento', 'btransitos')
			->whereBetween('estado_id', [11, 13])
			->where('user_id', '=', $id)
			->whereBetween('updated_at', [$bdate, $edate])->get();

		return $shipments;
	}

	public function getReportesUsuariosLostRows($id, $date_init, $date_finale)
	{
		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();

		$shipments = Shipment::with('estados', 'senders.establecimiento', 'recivers.establecimiento', 'btransitos')
			->whereBetween('estado_id', [8, 10])
			->where('user_id', '=', $id)
			->whereBetween('updated_at', [$bdate, $edate])->get();

		return $shipments;
	}

	public function getReportesUsuariosStatesRows($id, $date_init, $date_finale, $state)
	{
		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();

		if($state == 0 or $state == null){
			$shipments = Shipment::with('estados', 'senders.establecimiento', 'recivers.establecimiento', 'btransitos')
				->where('user_id', '=', $id)
				->whereBetween('updated_at', [$bdate, $edate])->get();
		} else {
			$shipments = Shipment::with('estados', 'senders', 'recivers', 'btransitos')
				->where('estado_id', '=', $state)
				->where('user_id', '=', $id)
				->whereBetween('updated_at', [$bdate, $edate])->get();
		}
		return $shipments;
	}

	public function getReportesHistorial()
	{
		return View('reportes.historial.index');
	}
}
