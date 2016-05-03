<?php

namespace App\Http\Controllers;

use App\Municipio;
use Illuminate\Http\Request;

use App\Http\Requests;

class MunicipiosController extends Controller
{
    /**
     * SeccionesController constructor.
     */
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    /**
     * [relacionados description]
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function relacionados($id)
    {
        $municipios = Municipio::where('departamento_id', '=', $id)->get();
        return $municipios;
    }
}
