<?php

namespace App\Http\Controllers;

use App\Events\TransitosBolsasStore;
use App\TransitoBolsa;
use Illuminate\Http\Request;

use App\Http\Requests;

class TransitosBolsasController extends Controller
{

    /**
     * SeccionesController constructor.
     */
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    /**
     * @param $name
     */
    public function imageRemove($name){
        @unlink(public_path('images/transitos/fotos/' . $name));
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|string|\Symfony\Component\HttpFoundation\Response
     */
    public function imagePost(Request $request, $id){

        if ($request->hasFile('foto')) {
            $foto = $id . "-" .$request['foto']->getClientOriginalname() . "--" . date('Y-m-d') . '.' . $request['foto']->getClientOriginalExtension();
            $request['foto']->move(base_path() . '/public/images/transitos/fotos/', $foto);
            return $foto;
        }

        return response(402);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     */
    public function store(Request $request)
    {
        event(new TransitosBolsasStore($request));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $transitos = TransitoBolsa::findOrFail($id);
        return $transitos;
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
        $transito = TransitoBolsa::findOrFail($id);
        $transito->update($request->all());
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
