<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Shipment;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportesQueryController extends Controller {

	/**
	 * @param $date_init
	 * @param $date_finale
	 * @param null $estado
	 * @param null $establecimiento
	 * @return array
	 */
	public function getReporteGeneral($date_init, $date_finale, $estado = null, $establecimiento = null){
		$estados = explode(",", $estado);
		$establecimientos = explode(",", $establecimiento);

		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();

		if(is_null($estado) && is_null($establecimiento)){

			$shipments = Shipment::whereBetween('updated_at', [$bdate, $edate])
				->select('updated_at as fecha', DB::raw("MONTH(updated_at) as mes, DAY(updated_at) as dia,  count(estado_id) AS subtotal"))
				->groupBy(DB::raw("MONTH(updated_at)"))
				->orderBy("updated_at", "desc")
				->get();
			$total = $shipments->sum("subtotal");

		} elseif(isset($estado) && is_null($establecimiento)) {

			$shipments = Shipment::whereBetween('updated_at', [$bdate, $edate])
				->select('updated_at as fecha', DB::raw("MONTH(updated_at) as mes, DAY(updated_at) as dia,  count(estado_id) AS subtotal"))
				->whereIn("estado_id", $estados)
				->groupBy(DB::raw("MONTH(updated_at)"))
				->orderBy("updated_at", "desc")
				->get();

			$total = $shipments->sum("subtotal");
		} elseif(is_null($estado) && isset($establecimiento)){

			$shipments = Shipment::with('btransitos')
				->whereBetween('updated_at', [$bdate, $edate])
				->select('updated_at as fecha', DB::raw("MONTH(updated_at) as mes, DAY(updated_at) as dia,  count(estado_id) AS subtotal"))
				->whereHas('btransitos', function($q) use (&$data, $establecimientos) {
					$q->whereIn('establecimiento_id', $establecimientos);
				})
				->groupBy(DB::raw("MONTH(updated_at)"))
				->orderBy("updated_at", "desc")
				->get();
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
				->get();
			$total = $shipments->sum("subtotal");

		}

		return $shipments = [
			'total' => $total,
			'series' => $shipments
		];

	}

	/**
	 * @param $date_init
	 * @param $date_finale
	 * @param null $estado
	 * @return array
	 */
	public function getReporteGeneralDiario($date_init, $date_finale, $estado = null){
		$estados = explode(",", $estado);

		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();

		if(is_null($estado)){
			$shipments = Shipment::whereBetween('updated_at', [$bdate, $edate])
				->select('updated_at as fecha', DB::raw("updated_at, DAY(updated_at) as dia, MONTH(updated_at) as mes,  count(estado_id) AS subtotal"))
				->groupBy(DB::raw("DAY(updated_at)"))
				->orderBy("updated_at", "desc")
				->get();

			$total = $shipments->sum("subtotal");
		} else {
			$shipments = Shipment::whereBetween('updated_at', [$bdate, $edate])
				->select('updated_at as fecha', DB::raw("updated_at, DAY(updated_at) as dia, MONTH(updated_at) as mes,  count(estado_id) AS subtotal"))
				->whereIn("estado_id", $estados)
				->groupBy(DB::raw("DAY(updated_at)"))
				->orderBy("updated_at", "desc")
				->get();

			$total = $shipments->sum("subtotal");
		}

		return $shipments = [
			'total' => $total,
			'series' => $shipments
		];
	}

	public function getReporteGeneralPdf($date_init, $date_finale, $page = 1){
		$counter = 50;
		$start = ($page > 1) ? ($page * $counter) - $counter : 0;

		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();

		$shipments = Shipment::with( 'estados', 'recivers.establecimiento', 'senders.establecimiento', 'btransitos')
			->whereBetween('updated_at', [$bdate, $edate])
			->limit($counter)
			->offset($start)
			->get();

		$resultCount = Shipment::select('id')
			->whereBetween('updated_at', [$bdate, $edate])
			->count();

		return $shipments = [
			'itemsPerPage' => $counter,
			'resultCount' => $resultCount,
			'items' => $shipments
		];
	}
}
