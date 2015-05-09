@extends('app')

@section('title', 'Administración de Usuarios')

@section('link-button')
	<a class="btn btn-primary" href="{{ action('UserController@create') }}">Nuevo Usuario</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('roles') }}">Administración de Usuarios</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')

	<table class="table table-hover table-bordered">
		<thead>
		<th>Nombre</th>
		<th>email</th>
		<th>Rol asignado</th>
		</thead>
		<tbody>
			@foreach($users as $user)
				<tr>
					<td><a href="{{ $user->id }}">{{ $user->name }}</a></td>
					<td>{{ $user->email }}</td>
					<td>
						@foreach($user->roles as $rol)
							{{ $rol->name }}
						@endforeach
					</td>
				</tr>
			@endforeach
		</tbody>
	</table>
@stop