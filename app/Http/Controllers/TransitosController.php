<?php

namespace App\Http\Controllers;

use Storage;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Transito;

class TransitosController extends Controller
{


    /**
     * SeccionesController constructor.
     */
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    /**
     * [imageRemove description]
     * @param  [type] $name [description]
     * @return [type]       [description]
     */
    public function imageRemove($name){
       @unlink(public_path('images/transitos/fotos/' . $name));
    }

    /**
     * [imagePost description]
     * @param  Request $request [description]
     * @param  [type]  $id      [description]
     * @return [type]           [description]
     */
    public function imagePost(Request $request, $id){

        if ($request->hasFile('foto')) {
            $foto = $id . "-" .$request['foto']->getClientOriginalname() . "--" . date('Y-m-d') . '.' . $request['foto']->getClientOriginalExtension();
            $request['foto']->move(base_path() . '/public/images/transitos/fotos/', $foto);
            return $foto;
        }

        if ($request->hasFile('firma')) {
            $firma = $id . "-" .$request['foto']->getClientOriginalname() . "--" . date('Y-m-d') . '.' . $request['foto']->getClientOriginalExtension();
            $request['firma']->move(base_path() . '/public/images/transitos/firmas/', $firma);
            return $firma;
        }

        return response(402);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $transito = Transito::findOrFail($id);
        return $transito;
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
        $transito = Transito::findOrFail($id);
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
