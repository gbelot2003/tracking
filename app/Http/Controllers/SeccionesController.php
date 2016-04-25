<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeccionesFormRequest;
use App\Seccion;
use Illuminate\Http\Request;

use App\Http\Requests;

class SeccionesController extends Controller
{

    /**
     * SeccionesController constructor.
     */
    public function __construct()
    {
        $this->middleware('jwt.auth');
        $this->middleware('UserCheckPerms');
    }

    /**
     * @param null $search
     * @return mixed
     */
    public function search($search = null)
    {
        $query = Seccion::where('name', 'LIKE', '%'.$search.'%');
        $model = $query->paginate(10);
        return $model;
    }

    /**
     * @param $id
     * @return mixed
     */
    public function idSeach($id){
        $query = Seccion::select('id', 'name')->findOrFail($id);
        return $query;
    }

    /**
     * @param $name
     * @return mixed
     */
    public function listado($name){
        $query = Seccion::where('name', '=', $name)->get();
        return $query;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $secciones = Seccion::paginate(10);
       return $secciones;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:seccions',
        ]);

        $seccion = Seccion::create($request->all());
        return $seccion;

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $seccion = Seccion::findOrFail($id);
        return $seccion;
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
        $this->validate($request, [
            'name' => 'required',
        ]);

        $seccion = Seccion::findOrFail($id);
        $seccion->update($request->all());
        return $request;
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
