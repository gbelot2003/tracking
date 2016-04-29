<?php

namespace App\Http\Controllers;

use App\Departamento;
use App\Empresa;
use App\Establecimiento;
use App\Http\Requests\EstablecimientosCreateRequest;
use App\Http\Requests\EstablecimientosEditRequest;
use App\Municipio;
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
    }

    /**
     * @param $name
     * @return mixed
     */
    public function listado($name = null){

        if($name == null){
            $query = Establecimiento::take(10)->get();
        } else {
            $query = Establecimiento::where('name', 'LIKE', '%' . $name . '%')->get();
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
        $empresas = Empresa::all();
        $departamento = Departamento::all();
        $municipios = Municipio::all();

        return $agencias = array(
            'departameto' => $departamento,
            'municipios'    => $municipios,
            'empresas'  => $empresas
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param EstablecimientosCreateRequest $request
     * @return EstablecimientosCreateRequest
     */
    public function store(EstablecimientosCreateRequest $request)
    {
        $agencias = Establecimiento::create($request->all());
        return $agencias;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $empresas = Empresa::all();
        $departamento = Departamento::all();
        $municipios = Municipio::all();

        $agencias = Establecimiento::with('municipio', 'departamento', 'empresa')->findOrFail($id);
        return $agencias = array(
            'agencias' => $agencias,
            'departameto' => $departamento,
            'municipios'    => $municipios,
            'empresas'  => $empresas
        );
    }


    /**
     * Update the specified resource in storage.
     * @param EstablecimientosEditRequest $request
     * @param $id
     * @return EstablecimientosEditRequest
     */
    public function update(EstablecimientosEditRequest $request, $id)
    {

        unset($request['departamento']);
        unset($request['empresa']);
        unset($request['municipio']);
        $agencias = Establecimiento::findOrFail($id);
        $agencias->update($request->all());
        return $agencias;
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
