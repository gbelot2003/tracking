<?php

namespace App\Http\Controllers;

use App\Establecimiento;
use Illuminate\Http\Request;

use App\Http\Requests;

class AgenciasController extends Controller
{

/*    public function __construct()
    {
        $this->middleware('jwt.auth');
        $this->middleware('UserCheckPerms');
    }*/

    /**
     * @param null $search
     * @return mixed
     */
    public function search($search = null)
    {
        $query = Establecimiento::with('municipio', 'departamento', 'empresa');
        $query->where('name', 'LIKE', '%'.$search.'%');
        $query->orWhere('address', 'LIKE', '%'.$search.'%');
        $model = $query->paginate(10);
        return $model;
        return $search;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $agencias = Establecimiento::with('municipio', 'departamento', 'empresa')->paginate(10);
        return $agencias;
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $agencias = Establecimiento::with('municipio', 'departamento', 'empresa')->findOrFail(10);
        return $agencias;
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
        //
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
