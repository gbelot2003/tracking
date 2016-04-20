<?php

namespace App\Http\Controllers;

use App\Empresa;
use App\Establecimiento;
use App\Http\Requests\UserFormEditRequest;
use App\Http\Requests\UserFormCreateRequest;
use App\Role;
use App\User;
use App\Userstatus;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
        $this->middleware('UserCheckPerms');
    }


    public function search($search = null)
    {
        $query = User::with('roles', 'empresa', 'establecimiento', 'estado');
        $query->where('name', 'LIKE', '%'.$search.'%');
        $query->orWhere('email', 'LIKE', '%'.$search.'%');
        $model = $query->paginate(10);
        return $model;
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
        $estado = Userstatus::all('name', 'id');
        $establecimiento = Establecimiento::all('name', 'id');
        $empresas = Empresa::all('name', 'id');
        $roles = Role::all('display_name', 'id');
        
        return $create = array(
            'establecimientos' => $establecimiento,
            'empresas' => $empresas,
            'estado' => $estado,
            'roles' => $roles
        );
    }

    public function store(UserFormCreateRequest $request)
    {
        $user = User::create($request->all());
        return response()->json(['Usuario Actualizado'], 200);
    }

    /**
     * @param  [type]
     * @return [type]
     * @route "/users/admin/{id}/edit"
     */
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

    /**
     * @param  [type]
     * @param  UserFormRequest
     * @return [type]
     * @route "/users/admin/{id}" "PUT"
     */
    public function update($id, UserFormEditRequest $request)
    {

        $user = User::findOrFail($id);

        if($request->input('password')):
            $request['password'] = bcrypt($request->input('password'));
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

    /**
     * Destroy user
     * @param  [type]
     * @return [type]
     * @route "users/admin/{id}" "destroy"
     */
    public function destroy($id)
    {

    }
}
