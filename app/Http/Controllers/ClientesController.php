<?php

namespace App\Http\Controllers;

use App\Establecimiento;
use App\Seccion;
use App\Trader;
use Illuminate\Http\Request;
use App\Http\Requests;

class ClientesController extends Controller
{

    /**
     * SeccionesController constructor.
     */
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    /**
     * @param null $search
     * @return \Illuminate\Database\Eloquent\Builder|static
     */
    public function search($search = null)
    {
        $query = Trader::with('seccion', 'establecimiento', 'estado');
        $query->where('name', 'LIKE', '%'.$search.'%');
        $model = $query->paginate(10);
        return $model;

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clientes = Trader::with('seccion', 'establecimiento', 'estado')->paginate(10);
        return $clientes;
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
        $agencias = Establecimiento::limit(10)->get();
        $seccion = Seccion::limit(10)->get();

        $cliente = Trader::with('seccion', 'establecimiento', 'estado')->findOrFail($id);
        return $cliente = array(
            'cliente' => $cliente,
            'agencias' => $agencias,
            'secciones' => $seccion
        );
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
