<?php namespace App\Http\Controllers;

use App\Establecimiento;
use App\Estado;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Shipment;
use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportsController extends Controller {

	public function __construct()
	{
		$this->middleware('auth');
	}

	public function getReporteGeneral($date_init = null, $date_finale = null, $estadoR = null, $establecimientoR = null){

		$establecimientoList = Establecimiento::where('empresa_id', '!=', '1')->lists('name', 'id');
		$estadosList = Estado::where('id', '!=', 14 )
			->where('id', '!=', 15)
			->lists('name', 'id');

		$estados = null;
		if(!is_null($estadoR)){
			$estados = explode(",", $estadoR);
		}

		$establecimientos = null;
		if(!is_null($establecimientoR)){
			$establecimientos = explode(",", $establecimientoR);
		}

		if(is_null($date_init)){
			$date_init = Date('Y-m-d');
		}
		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();

		if(is_null($date_finale)){
			$date_finale = Date('Y-m-d');
		}
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();

		if(!is_null($date_init) && !is_null($bdate)){
			if(is_null($estados) && is_null($establecimientos)){

				$shipments = Shipment::whereBetween('updated_at', [$bdate, $edate])
					->select('updated_at as fecha', DB::raw("MONTH(updated_at) as mes, DAY(updated_at) as dia,  count(estado_id) AS subtotal"))
					->groupBy(DB::raw("MONTH(updated_at)"))
					->orderBy("updated_at", "desc")
					->Paginate(20);
				$total = $shipments->sum("subtotal");

			} elseif(isset($estados) && is_null($establecimientos)) {

				$shipments = Shipment::whereBetween('updated_at', [$bdate, $edate])
					->select('updated_at as fecha', DB::raw("MONTH(updated_at) as mes, DAY(updated_at) as dia,  count(estado_id) AS subtotal"))
					->whereIn("estado_id", $estados)
					->groupBy(DB::raw("MONTH(updated_at)"))
					->orderBy("updated_at", "desc")
					->Paginate(20);

				$total = $shipments->sum("subtotal");
			} elseif(is_null($estados) && isset($establecimientos)){

				$shipments = Shipment::with('btransitos')
					->whereBetween('updated_at', [$bdate, $edate])
					->select('updated_at as fecha', DB::raw("MONTH(updated_at) as mes, DAY(updated_at) as dia,  count(estado_id) AS subtotal"))
					->whereHas('btransitos', function($q) use (&$data, $establecimientos) {
						$q->whereIn('establecimiento_id', $establecimientos);
					})
					->groupBy(DB::raw("MONTH(updated_at)"))
					->orderBy("updated_at", "desc")
					->Paginate(20);
				$total = $shipments->sum("subtotal");

			} else {

				$shipments = Shipment::with('btransitos')
					->whereBetween('updated_at', [$bdate, $edate])
					->select('updated_at as fecha', DB::raw("MONTH(updated_at) as mes, DAY(updated_at) as dia,  count(estado_id) AS subtotal"))
					->whereHas('btransitos', function($q) use (&$data, $establecimientos) {
						$q->whereIn('establecimiento_id', $establecimientos);
					})
					->whereIn("estado_id", $estados)
					->groupBy(DB::raw("MONTH(updated_at)"))
					->orderBy("updated_at", "desc")
					->Paginate(20);
				$total = $shipments->sum("subtotal");

			}
		}

		return View('reportes2.general.reporte-general', compact('estadosList', 'establecimientoList','estadoR' ,'estados', 'shipments', 'total', 'date_init', 'date_finale'));
	}

	public function getReporteGeneralListadoMes($inicio, $estado = null, $establecimiento = null){

		$bdate =  Carbon::createFromFormat('Y-m-d', $inicio)->startOfMonth();
		$edate =  Carbon::createFromFormat('Y-m-d', $inicio)->endOfMonth();

		$estados = null;
		$establecimientos = null;

		if(!is_null($estado) && is_null($establecimiento)){
			$estados = explode(",", $estado);

			$shipments = Shipment::with('btransitos')
				->select('updated_at as fecha', DB::raw("updated_at, DAY(updated_at) as dia, MONTH(updated_at) as mes, YEAR(updated_at) as year, count(estado_id) AS subtotal"))
				->whereBetween('updated_at', [$bdate, $edate])
				->whereIn('estado_id', $estados)
				->groupBy(DB::raw("DAY(updated_at)"))
				->orderBy('updated_at', 'DESC')
				->Paginate(30);
		} elseif(is_null($estado) && !is_null($establecimiento)){
			$establecimientos = explode(",", $establecimiento);

			$shipments = Shipment::with('btransitos')
				->select('updated_at as fecha', DB::raw("updated_at, DAY(updated_at) as dia, MONTH(updated_at) as mes, YEAR(updated_at) as year, count(estado_id) AS subtotal"))
				->whereBetween('updated_at', [$bdate, $edate])
				->whereHas('btransitos', function($q) use (&$data, $establecimientos) {
					$q->whereIn('establecimiento_id', $establecimientos);
				})
				->groupBy(DB::raw("DAY(updated_at)"))
				->orderBy('updated_at', 'DESC')
				->Paginate(30);
		} elseif(!is_null($estado) && !is_null($establecimiento)){
			$estados = explode(",", $estado);
			$establecimientos = explode(",", $establecimiento);

			$shipments = Shipment::with('btransitos')
				->select('updated_at as fecha', DB::raw("updated_at, DAY(updated_at) as dia, MONTH(updated_at) as mes, YEAR(updated_at) as year, count(estado_id) AS subtotal"))
				->whereBetween('updated_at', [$bdate, $edate])
				->whereHas('btransitos', function($q) use (&$data, $establecimientos) {
					$q->whereIn('establecimiento_id', $establecimientos);
				})
				->whereIn('estado_id', $estados)
				->groupBy(DB::raw("DAY(updated_at)"))
				->orderBy('updated_at', 'DESC')
				->Paginate(30);
		} else {
			$shipments = Shipment::with('btransitos')
				->select('updated_at as fecha', DB::raw("updated_at, DAY(updated_at) as dia,  MONTH(updated_at) as mes, YEAR(updated_at) as year, count(estado_id) AS subtotal"))
				->whereBetween('updated_at', [$bdate, $edate])
				->groupBy(DB::raw("DAY(updated_at)"))
				->orderBy('updated_at', 'DESC')
				->Paginate(30);
		}
		$total = $shipments->sum('subtotal');
		//dd($shipments->all());
		return View('reportes2.general.listado-mes', compact('inicio', 'shipments', 'bdate', 'total'));
	}

	public function getReporteGeneralListadoDia($inicio, $estado = null, $establecimiento = null){

		$bdate =  Carbon::createFromFormat('Y-m-d', $inicio)->startOfDay();
		$edate =  Carbon::createFromFormat('Y-m-d', $inicio)->endOfDay();

		$shipments = Shipment::with('btransitos')
			->whereBetween('updated_at', [$bdate, $edate])
			->orderBy('updated_at', 'DESC')
			->Paginate(20);
		//dd($shipments->all());
		return View('reportes2.general.listado-dia', compact('shipments'));
	}
}
