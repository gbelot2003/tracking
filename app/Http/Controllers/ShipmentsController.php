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
        $state = [4, 7, 8, 9, 10, 11, 12, 13];

        $paquete = Shipment::getByCode($code)->first();
        $bolsa = Bolsa::findOrFail($bag)->first();

        if(in_array($paquete->transito->estado_id, $state)){
            return response()->json("EL Paquete existe en otra bolsa o se ha entregado", 500);
        } else {
            $this->pusher->trigger('channel-' . $bag, 'event', ['paquete' => $paquete]);

            $transito = Transito::create([
                'shipment_id'	=> $paquete->id,
                'estado_id'	 	=> 4,
                'establecimiento_id' => Auth::user()->establecimiento_id,
                'user_id'	 	=> Auth::id(),
                'details'		=> 'Paquete en bolsa Codigo ' . $bolsa->code
            ]);

            $paquete->bolsas()->attach($bag);

        }

        //return $res;
    }


    public function search($date = null, $search = null, $type = null)
    {
        $query = Shipment::shipmentsearch(Auth::Id(), $date, $search, $type)->paginate(10);
        return $query;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $shipments = Shipment::shipmentindex(Auth::Id())->paginate(10);
        return $shipments;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
                'estado_id'	 	=> $request->estado_id,
                'establecimiento_id' => Auth::user()->establecimiento_id,
                'user_id'	 	=> Auth::id(),
                'details'		=> ''
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
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
