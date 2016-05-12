<?php

namespace App\Http\Controllers;

use App\Transito;
use App\TransitoBolsa;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;

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
        $request['user_id'] = Auth::Id();
        $transito = TransitoBolsa::create($request->all());
        return $transito;
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
