<?php

namespace App\Http\Controllers;

use App\Establecimiento;
use App\Http\Requests\ClientesCreateRequest;
use App\Http\Requests\ClientesEditRequest;
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
        $query->orWhereHas('seccion', function($q) use($search){
            $q->where('name', 'LIKE', '%' . $search . "%");
        });
        $query->orWhereHas('establecimiento', function($q) use($search){
            $q->where('name', 'LIKE', '%' . $search . "%");
        });
        $model = $query->paginate(10);
        return $model;

    }

    /**
     * @param $name
     * @return mixed
     */
    public function listado($name = null){

        if($name == null){
            $query = Trader::with('establecimiento')->take(10)->get();
        } else {
            $query = Trader::with('establecimiento')
                ->where('name', 'LIKE', '%' . $name . '%')->take(20)->get();
        }
        return $query;
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ClientesCreateRequest $request)
    {
        $clientes = Trader::create($request->all());
        $model = Trader::with('seccion', 'establecimiento')->findOrFail($clientes->id);
        return $model;
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ClientesEditRequest $request, $id)
    {
        $clientes = Trader::findOrFail($id);
        $clientes->update($request->all());
        return $clientes;
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
