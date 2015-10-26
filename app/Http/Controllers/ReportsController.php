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

	/**
	 * Reporte Rango Mensual
	 * @param null $date_init
	 * @param null $date_finale
	 * @return \BladeView|bool|\Illuminate\Http\RedirectResponse|\Illuminate\View\View
	 */
	public function getReporteRangoMensual($date_init = null, $date_finale = null){

		if($date_init < $date_finale){
			return redirect()->back()->with('message', 'La fecha de incio no puede ser menor a la fecha final');
		}

		if(is_null($date_init)){
			$date_init = Date('Y-m-d');
		}
		$bdate = Carbon::createFromFormat('Y-m-d', $date_init)->startOfDay();

		if(is_null($date_finale)){
			$date_finale = Date('Y-m-d');
		}
		$edate = Carbon::createFromFormat('Y-m-d', $date_finale)->endOfDay();

		$dates = Shipment::select(DB::raw("YEAR(updated_at) as year, MONTH(updated_at) as mes"))
			->groupBy(DB::raw("MONTH(updated_at)"))
			->orderBy("updated_at", "desc")
			->get();

			$shipments = Shipment::with('btransitos')
				->select('updated_at as fecha, estado_id',
					DB::raw(
						"
							SUM(IF(estado_id = 1,1,0)) espera, SUM(IF(estado_id = 2,1,0)) regular,
							SUM(IF(estado_id = 3,1,0)) acopio, SUM(IF(estado_id = 4,1,0)) transporte,
							SUM(IF(estado_id = 5,1,0)) dligero, SUM(IF(estado_id = 6,1,0)) dgrave,
							SUM(IF(estado_id = 7,1,0)) eterceroscontinua, SUM(IF(estado_id = 8,1,0)) extrabiado,
							SUM(IF(estado_id = 9,1,0)) robados, SUM(IF(estado_id = 10,1,0)) danocompleto,
							SUM(IF(estado_id = 11,1,0)) entregadocerrado, SUM(IF(estado_id = 12,1,0)) entregadobs,
							SUM(IF(estado_id = 13,1,0)) entregadocerradofinal,
							YEAR(updated_at) as year, MONTH(updated_at) as mes, DAY(updated_at) as dia,  count(estado_id) AS subtotal
							"
					)
				)
				->whereBetween('updated_at', [$bdate, $edate])
				->groupBy(DB::raw("MONTH(updated_at)"))
				->orderBy("updated_at", "desc")
				->Paginate(20);

			$total = $shipments->sum("subtotal");
			$espera = $shipments->sum("espera");
			$regular = $shipments->sum("regular");
			$acopio = $shipments->sum("acopio");
			$transporte = $shipments->sum("transporte");
			$dligero = $shipments->sum("dligero");
			$dgrave = $shipments->sum("dgrave");
			$eterceroscontinua = $shipments->sum("eterceroscontinua");
			$extrabiado = $shipments->sum("extrabiado");
			$robados = $shipments->sum("robados");
			$danocompleto = $shipments->sum("danocompleto");
			$entregadocerrado = $shipments->sum("entregadocerrado");
			$entregadobs = $shipments->sum("entregadobs");
			$entregadocerradofinal = $shipments->sum("entregadocerradofinal");


		//dd($shipments->all());
		return View('reportes2.general.reporte-rango-mensual', compact(
			'shipments', 'total', 'date_init', 'date_finale', 'espera', 'regular', 'acopio', 'transporte', 'dligero', 'dgrave', 'eterceroscontinua',
			'extrabiado', 'robados', 'danocompleto', 'entregadocerrado', 'entregadobs', 'entregadocerradofinal','establecimiento', 'dates'
		));
	}

	/**
	 * Reporte Listado Mensual
	 * @param $inicio
	 * @param null $estado
	 * @return \BladeView|bool|\Illuminate\View\View
	 */
	public function getReporteListadoMes($inicio, $estado = null){

		$bdate =  Carbon::createFromFormat('Y-m-d', $inicio)->startOfMonth();
		$edate =  Carbon::createFromFormat('Y-m-d', $inicio)->endOfMonth();



		$shipments = Shipment::whereBetween('updated_at', [$bdate, $edate])
			->select('updated_at as fecha', 'estado_id',
				DB::raw(
					"
							SUM(IF(estado_id = 1,1,0)) espera, SUM(IF(estado_id = 2,1,0)) regular,
							SUM(IF(estado_id = 3,1,0)) acopio, SUM(IF(estado_id = 4,1,0)) transporte,
							SUM(IF(estado_id = 5,1,0)) dligero, SUM(IF(estado_id = 6,1,0)) dgrave,
							SUM(IF(estado_id = 7,1,0)) eterceroscontinua, SUM(IF(estado_id = 8,1,0)) extrabiado,
							SUM(IF(estado_id = 9,1,0)) robados, SUM(IF(estado_id = 10,1,0)) danocompleto,
							SUM(IF(estado_id = 11,1,0)) entregadocerrado, SUM(IF(estado_id = 12,1,0)) entregadobs,
							SUM(IF(estado_id = 13,1,0)) entregadocerradofinal,
							MONTH(updated_at) as mes, DAY(updated_at) as dia,  count(estado_id) AS subtotal
							"
				)
			)
			->groupBy(DB::raw("DAY(updated_at)"))
			->orderBy("updated_at", "desc")
			->Paginate(31);

		$total = $shipments->sum("subtotal");
		$espera = $shipments->sum("espera");
		$regular = $shipments->sum("regular");
		$acopio = $shipments->sum("acopio");
		$transporte = $shipments->sum("transporte");
		$dligero = $shipments->sum("dligero");
		$dgrave = $shipments->sum("dgrave");
		$eterceroscontinua = $shipments->sum("eterceroscontinua");
		$extrabiado = $shipments->sum("extrabiado");
		$robados = $shipments->sum("robados");
		$danocompleto = $shipments->sum("danocompleto");
		$entregadocerrado = $shipments->sum("entregadocerrado");
		$entregadobs = $shipments->sum("entregadobs");
		$entregadocerradofinal = $shipments->sum("entregadocerradofinal");

		//dd($shipments->all());
		return View('reportes2.general.listado-mes',
			compact(
				'inicio', 'shipments',  'shipments', 'total', 'date_init', 'date_finale', 'espera', 'regular',
				'acopio', 'transporte', 'dligero', 'dgrave', 'eterceroscontinua', 'extrabiado', 'robados',
				'danocompleto', 'entregadocerrado', 'entregadobs', 'entregadocerradofinal',	'establecimiento'
			)
		);
	}

	/**
	 * Listado Mensual por Estado
	 * @param $inicio
	 * @param $estado
	 * @return \BladeView|bool|\Illuminate\View\View
	 */
	public function getReporteListadoMensualPorEstado($inicio, $estado){

		$bdate =  Carbon::createFromFormat('Y-m-d', $inicio)->startOfMonth();
		$edate =  Carbon::createFromFormat('Y-m-d', $inicio)->endOfMonth();

		$tMes = Carbon::createFromFormat('Y-m-d', $inicio)->month;
		$tAnio = Carbon::createFromFormat('Y-m-d', $inicio)->year;

		$tEstado = Estado::where('id', '=', $estado)->first();

		$shipments = Shipment::with('btransitos')
			->whereBetween('updated_at', [$bdate, $edate])
			->where('estado_id', '=', $estado)
			->orderBy('updated_at', 'DESC')
			->Paginate(25);

		$total = Shipment::with('btransitos')
			->whereBetween('updated_at', [$bdate, $edate])
			->where('estado_id', '=', $estado)
			->orderBy('updated_at', 'DESC')
			->count();

		//dd($tEstado->name);
		return View('reportes2.general.listado-mes-estado', compact('shipments', 'total', 'tEstado', 'tMes', 'tAnio'));
	}

	/**
	 * Reporte Listado Diario
	 * @param $inicio
	 * @param null $estado
	 * @param null $establecimiento
	 * @return \BladeView|bool|\Illuminate\View\View
	 */
	public function getReporteListadoDia($inicio, $estado = null, $establecimiento = null){

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
