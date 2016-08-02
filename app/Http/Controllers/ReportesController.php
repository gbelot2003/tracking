<?php

namespace App\Http\Controllers;

use App\Shipment;
use App\Transito;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\DB;
class ReportesController extends Controller
{


    public function generalPorUsuario(Request $request)
    {
        $bDate = $request->input('bDate');
        $eDate = $request->input('eDate');
        $id = $request->input('id');
        $estado_id = $request->input('estados_id');

        $bdate =  Carbon::createFromFormat('Y-m-d', $bDate)->startOfDay();
        $edate =  Carbon::createFromFormat('Y-m-d', $eDate)->endOfDay();

        $transitos = Transito::with('shipments', 'estados')
            ->where('user_id', '=', $id)
            ->whereBetween('created_at', [$bdate, $edate]);

        if($estado_id != null)
        {
            $transitos->where('estado_id', '=', $estado_id);
        }


        return $transitos->get();
    }

    public function generalPorEstado(Request $request)
    {
        $bDate = $request->input('bDate');
        $eDate = $request->input('eDate');

        $bdate =  Carbon::createFromFormat('Y-m-d', $bDate)->startOfDay();
        $edate =  Carbon::createFromFormat('Y-m-d', $eDate)->endOfDay();


        $shipments = Shipment::Join('transitos as t', function($q){
                $q->on('shipments.id', '=', 't.shipment_id');
                $q->on('t.estado_id', '=',
                    DB::Raw('(select max(estado_id) from transitos where shipment_id = t.shipment_id)')
                );
            })
            ->selectRaw(
                "
                SUM(IF(t.estado_id = 1,1,0)) espera, SUM(IF(t.estado_id = 2,1,0)) regular,
                SUM(IF(t.estado_id = 3,1,0)) acopio, SUM(IF(t.estado_id = 4,1,0)) transporte,
                SUM(IF(t.estado_id = 5,1,0)) dligero, SUM(IF(t.estado_id = 6,1,0)) dgrave,
                SUM(IF(t.estado_id = 7,1,0)) eterceroscontinua, SUM(IF(t.estado_id = 8,1,0)) extrabiado,
                SUM(IF(t.estado_id = 9,1,0)) robados, SUM(IF(t.estado_id = 10,1,0)) danocompleto,
                SUM(IF(t.estado_id = 11,1,0)) entregadocerrado, SUM(IF(t.estado_id = 12,1,0)) entregadobs,
                SUM(IF(t.estado_id = 13,1,0)) entregadocerradofinal,
                YEAR(t.updated_at) as year,
                MONTH(t.updated_at) as mes,
                DAY(t.updated_at) as dia,
                count(t.estado_id) AS subtotal
                "
            )
            ->whereBetween('shipments.created_at', [$bdate, $edate])
            ->groupBy(DB::raw("MONTH(updated_at)"))
            ->orderBy("t.updated_at", "desc")
            ->get();


        $total = $shipments->count();

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

        return array(
            'shipments' => $shipments->all(),
            'gtotal'                => $total,
            'espera'                => $espera,
            'regular'               => $regular,
            'acopio'                => $acopio,
            'transporte'            => $transporte,
            'dligero'               => $dligero,
            'dgrave'                => $dgrave,
            'eterceroscontinua'     => $eterceroscontinua,
            'extrabiado'            => $extrabiado,
            'robados'               => $robados,
            'danocompleto'          => $danocompleto,
            'entregadocerrado'      => $entregadocerrado,
            'entregadobs'           => $entregadobs,
            'entregadocerradofinal' => $entregadocerradofinal,
        );
    }
}
