<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Shipment;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashQueryController extends Controller {

	public function getShipmentByDate($date){

		$bdate = Carbon::createFromFormat('Y-m-d', $date)->startOfDay();
		$edate = Carbon::createFromFormat('Y-m-d', $date)->endOfDay();

		$shipments = Shipment::with('btransitos')
		->whereBetween('updated_at', [$bdate, $edate])
		->orderBy('updated_at', 'DESC')
		->get();

		return $shipments;
	}
}
