<?php

namespace App\Http\Controllers;

use App\Bolsa;
use App\Http\Requests\ShipmentsFormRequest;
use App\Shipment;
use App\Transito;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Vinkla\Pusher\PusherManager;

class ShipmentsController extends Controller
{

    /**
     * SeccionesController constructor.
     */
    public function __construct(PusherManager $pusher)
    {
        $this->pusher = $pusher;
        $this->middleware('jwt.auth');
    }


    public function updateBulks(Request $request)
    {
        $request['user_id'] = Auth::id();

        foreach($request->codes as $codes) {
            $shipment = Shipment::where('code', '=', $codes)->first();

            $transito = Transito::create([
                'shipment_id' => $shipment->id,
                'estado_id' => $request->estado_id,
                'establecimiento_id' => Auth::user()->establecimiento_id,
                'user_id' => Auth::id(),
                'details' => $request->details
            ]);
        }
        return $request->all();
    }

    /**
     * @param $code
     * @return array|\Illuminate\Http\JsonResponse
     */
    public function checkStateByCode($code)
    {
        $state = [4, 8, 9, 11, 12, 13];
        if(!is_numeric($code)){
            return response()->json("No has agregado un numero", 405);
        }
        if (Shipment::where('code', '=', $code)->count() > 0) {
            $shipment = Shipment::where('code', '=', $code)->first();
            if(in_array($shipment->transito->estado_id, $state)){
                $estado = $shipment->transito->estados->name;
                return response()->json($estado, 404);
            } else {
                return $response = array(
                    'value' => 1
                );
            }
        } else {
            return $response = array(
                'value' => 2
            );
        }
    }

    /**
     * @param $code
     * @return bool
     **/
    public function checkCode($code)
    {
        if (Shipment::where('code', '=', $code)->count() > 0) {
            return $response = array(
                'value' => 1
            );
        } else {
            return $response = array(
                'value' => 2
            );
        }
    }

    /**
     * @param $code
     * @param $bag
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByCode($code, $bag)
    {
        $state = [4, 8, 9, 11, 12, 13];

        $paquete = Shipment::getByCode($code)->first();
        $bolsa = Bolsa::findOrFail($bag)->first();

        if(in_array($paquete->transito->estado_id, $state)){

            $estado = $paquete->transito->estados->name;
            return response()->json($estado, 404);

        } else {
            $this->pusher->trigger('channel-' . $bag, 'event', ['paquete' => $paquete]);

            $transito = Transito::create([
                'shipment_id'	=> $paquete->id,
                'estado_id'	 	=> 4,
                'establecimiento_id' => Auth::user()->establecimiento_id,
                'user_id'	 	=> Auth::id(),
                'details'		=> 'Paquete en bolsa Codigo ' . $bolsa->code
            ]);

            $paquete->update([
                'estado_id' => $transito->estado_id
            ]);

            $paquete->bolsas()->attach($bag);

        }
    }

    public function removeByCode($code, $bag, $index, $type)
    {
        $paquete = Shipment::getByCode($code)->first();
        $paquete->bolsas()->detach($bag);

        $transito = Transito::create([
            'shipment_id'	=> $paquete->id,
            'estado_id'	 	=> 2,
            'establecimiento_id' => Auth::user()->establecimiento_id,
            'user_id'	 	=> Auth::id(),
            'details'		=> 'Paquete removido en bolsa Codigo '
        ]);

        $this->pusher->trigger('channel-' . $bag, 'event2', [
            'type' => $type,
            'index' => $index,
            'code'  => $code
        ]);
        $paquete->update([
            'estado_id' => $transito->estado_id
        ]);

        return $paquete;
    }

    /**
     * Performs Search opetation
     *
     * @param null $date
     * @param null $search
     * @param null $type
     * @return mixed
     */
    public function search($date = null, $search = null, $type = null)
    {
        $query = Shipment::shipmentsearch($date, $search, $type)->paginate(10);
        return $query;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shipments = Shipment::shipmentindex(Auth::Id())->orderBy('id', 'DESC')->paginate(10);
        return $shipments;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ShipmentsFormRequest $request
     * @return ShipmentsFormRequest
     */
    public function store(ShipmentsFormRequest $request)
    {
        $request['user_id'] = Auth::id();
        foreach($request->codes as $codes){
            $request['code'] = $codes;
            $shipment = Shipment::create($request->all());
            $transito = Transito::create([
                'shipment_id'	=> $shipment->id,
                'estado_id'	 	=> 2,
                'establecimiento_id' => Auth::user()->establecimiento_id,
                'user_id'	 	=> Auth::id()
            ]);
        }
        return $request->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $shipment = Shipment::shipmentshow()->findOrFail($id);
        return $shipment;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ShipmentsFormRequest $request
     * @param $id
     * @return mixed
     */
    public function update(ShipmentsFormRequest $request, $id)
    {
        /** @var Pendiente con FormRequest validation */
        $shipment = Shipment::findOrFail($id);
        $shipment->update($request->all());
        return $shipment;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
