<?php namespace App\Http\Controllers;

use App\Establecimiento;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Seccion;
use App\Shipment;
use App\Trader;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashQueryController extends Controller {

	public function getTrader(){

		$query = $_SERVER['QUERY_STRING'];
		$vars = [];
		foreach (explode('&', $query) as $pair) {
			list($key, $value) = explode('=', $pair);
			if('' == trim($value)){
				continue;
			}
			$vars[$key] = urldecode($value);
		}
		$name = $vars['q'];

		$trader = Trader::select('id', 'name as text')
		->where('name', 'LIKE', '%'. $name .'%')->get();
		return [
			'results' => $trader
		];

	}

	public function getEstablecimiento(){
		$query = $_SERVER['QUERY_STRING'];
		$vars = [];
		foreach (explode('&', $query) as $pair) {
			list($key, $value) = explode('=', $pair);
			if('' == trim($value)){
				continue;
			}
			$vars[$key] = urldecode($value);
		}
		$name = $vars['q'];

		$establecimientos = Establecimiento::select('id', 'name as text')
			->where('name', 'LIKE', '%' . $name .'%')->get();

		return [
			'results' => $establecimientos
		];
	}

	public function getSeccion(){
		$query = $_SERVER['QUERY_STRING'];
		$vars = [];
		foreach (explode('&', $query) as $pair) {
			list($key, $value) = explode('=', $pair);
			if('' == trim($value)){
				continue;
			}
			$vars[$key] = urldecode($value);
		}
		$name = $vars['q'];

		$secciones = Seccion::select('id', 'name as text')
			->where('name', 'LIKE', '%' . $name .'%')->get();

		return [
			'results' => $secciones
		];
	}

	public function getShipmentByDate($date){

		$bdate = Carbon::createFromFormat('Y-m-d', $date)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date)->endOfDay();

		$shipments = Shipment::with('senders.establecimiento', 'recivers.establecimiento', 'btransitos.estados')
		->whereBetween('updated_at', [$bdate, $edate])
		->orderBy('updated_at', 'DESC')
		->get();

		return $shipments;
	}
}
