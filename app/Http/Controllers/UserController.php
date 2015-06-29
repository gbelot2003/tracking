<?php namespace App\Http\Controllers;

use App\Area;
use App\Empresa;
use App\Establecimiento;
use App\Estado;
use App\Http\Requests\UserFormRequest;
use App\Http\Controllers\Controller;
use App\Role;
use App\Trader;
use App\User;
use App\Userstatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller {

	/**** Recordatorio importante ******/

	public function __construct()
	{
		$this->middleware('auth');
		$this->middleware('UserCheckPerms', ['except' => ['edit', 'update']]);
		$this->middleware('UserUserCheckPerms', ['only' => ['edit', 'update']]);
		$this->id = Auth::id();
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		if(Auth::user()->hasRole(['admin', 'supervisor', 'centro-acopio', 'currier', 'cliente'])){
			$users = User::whereUserstatusId(1)->get();
		} else  {
			$users = User::all();
		}

		return View('user.index', compact('users'));
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		if(Auth::user()->hasRole(['admin', 'supervisor', 'centro-acopio', 'currier', 'cliente'])){
			$roles = Role::where('id', '>', 2)->lists('display_name', 'id');
		} else {
			$roles = Role::Lists('display_name', 'id');
		}

		$trader_list = Trader::all();
		$trader = $trader_list->lists('full_name', 'id');
		$estado = Userstatus::lists('name', 'id');
		$establecimiento = Establecimiento::lists('name', 'id');
		$empresas = Empresa::lists('name', 'id');
		$barra = 2;

		return View('user.create', compact('roles', 'trader', 'estado', 'establecimiento', 'barra', 'empresas'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(UserFormRequest $userFormData)
	{

		$userFormData['password'] = bcrypt($userFormData['password']);
		$user = User::create($userFormData->all());
		$user->roles()->attach($userFormData->input('roles_lists')); // id only
		Session::flash('flash_message', 'El usuario a sido creado');
		return redirect('user');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$user = User::findOrFail($id);
		return View('user.show', compact('user'));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$user = User::findOrFail($id);
		if($user->hasRole(['cliente'])){
			$barra = 1;
		}
		else {
			$barra = 2;
		}

		if(Auth::user()->hasRole(['admin', 'supervisor', 'centro-acopio', 'currier', 'cliente'])){
			$roles = Role::where('id', '>', 2)->lists('display_name', 'id');
		} else {
			$roles = Role::Lists('display_name', 'id');
		}

		$trader_list = Trader::all();
		$trader = $trader_list->lists('full_name', 'id');

		$estado = Userstatus::lists('name', 'id');
		$establecimiento = Establecimiento::lists('name', 'id');
		$empresas = Empresa::lists('name', 'id');

		return View('user.edit', compact('user', 'roles', 'trader', 'establecimiento', 'estado', 'barra', 'empresas'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(UserFormRequest $userFormData, $id)
	{
		$user = User::findOrFail($id);

		if($userFormData->input('password')):
			$userFormData['password'] = bcrypt($userFormData->input('password'));
			unset($userFormData['password_confirmation']);
		else:
			unset($userFormData['password']);
			unset($userFormData['password_confirmation']);
		endif;

		$user->update($userFormData->all());

		if($userFormData->input('roles_lists')){
			$user->roles()->sync($userFormData->input('roles_lists'));
		}


		if($userFormData->input('traders_list')){
			$traders = $userFormData->input('traders_list');
			$user->traders()->sync($traders);
		}

		Session::flash('flash_message', 'El usuario a sido editado correctamente');
		return redirect('user');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
