<?php namespace App\Http\Controllers;

use App\Establecimiento;
use App\Estado;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Shipment;
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
		$estados = Estado::take(13)->lists('name', 'id');

		return View('reportes.entregas', compact('establecimiento', 'estados', 'shipments'));
	}

	public function getRowsReporte($date, $state = 0, $stablish = 0)
	{

		$bdate = Carbon::createFromFormat('Y-m-d', $date)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date)->endOfDay();

		if($state != 0 and $stablish == 0){

			$shipments = Shipment::with( 'estados', 'recivers.establecimiento', 'senders.establecimiento')
				->where('estado_id', '=', $state)
				->whereBetween('updated_at', array($bdate, $edate))->get();

		} elseif($state != 0 and $stablish != 0){
			$shipments = Shipment::with( 'estados', 'recivers.establecimiento', 'senders.establecimiento')
				->whereHas('recivers', function($q) use (&$data, $stablish) {
					$q->where('establecimiento_id', '=', $stablish);
				})
				->where('estado_id', '=', $state)
				->whereBetween('updated_at', array($bdate, $edate))->get();

		} elseif($state == 0 and $stablish != 0){

			$shipments = Shipment::with( 'estados', 'recivers.establecimiento', 'senders.establecimiento')
				->where('establecimiento', '=', $stablish)
				->whereBetween('updated_at', array($bdate, $edate))->get();

		} else{

			$shipments = Shipment::with( 'estados', 'recivers.establecimiento', 'senders.establecimiento')
				->whereBetween('updated_at', array($bdate, $edate))->get();

		}

		return $shipments;

	}

}
