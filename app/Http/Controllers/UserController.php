<?php

namespace App\Http\Controllers;

use App\Empresa;
use App\Establecimiento;
use App\Http\Requests\UserFormRequest;
use App\Role;
use App\User;
use App\Userstatus;
use Illuminate\Http\Request;
use App\Http\Requests;

class UserController extends Controller
{
    public function __construct()
    {
        //$this->middleware('jwt.auth');
        //$this->middleware('UserCheckPerms');
    }

    /**
     * index
     * @path "/api/admin/users
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function index()
    {
        $users = User::with('roles', 'empresa', 'establecimiento', 'estado')->paginate(10);
        return $users;
    }

    /**
     * @param $id
     */
    public function show($id)
    {

    }

    public function create()
    {

    }

    public function store()
    {

    }


    public function edit($id)
    {

        $estado = Userstatus::all('name', 'id');
        $establecimiento = Establecimiento::all('name', 'id');
        $empresas = Empresa::all('name', 'id');
        $roles = Role::all('display_name', 'id');


        $user = User::with('roles', 'empresa', 'establecimiento', 'estado')->findOrFail($id);
        return $user = array(
            'user' => $user,
            'establecimientos' => $establecimiento,
            'empresas' => $empresas,
            'estado' => $estado,
            'roles' => $roles
        );
    }


    public function update($id, UserFormRequest $request)
    {

        $user = User::findOrFail($id);

        if($request->input('password')):
            $userFormData['password'] = bcrypt($request->input('password'));
            unset($request['password_confirmation']);
        else:
            unset($request['password']);
            unset($request['password_confirmation']);
        endif;

        $user->update($request->all());

        if($request->input('roles_lists')){
            if(!is_array($request->input('roles_lists'))){

            }else {
                $user->roles()->sync($request->input('roles_lists'));
            }
        }

        return response()->json(['Usuario Actualizado'], 200);
    }


    public function destroy($id)
    {

    }


}
