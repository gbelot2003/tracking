<?php

namespace App\Http\Controllers;

use App\Municipio;
use Illuminate\Http\Request;

use App\Http\Requests;

class MunicipiosController extends Controller
{
    public function relacionados($id)
    {
        $municipios = Municipio::where('departamento_id', '=', $id)->get();
        return $municipios;
    }
}
