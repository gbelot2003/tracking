@extends('app')

@section('title', 'Administración de Roles')

@section('link-button')
	<a class="btn btn-primary" href="{{ action('RolesController@create') }}">Nuevo Rol</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('roles') }}">Administración de Roles</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')

	<table class="table table-hover table-bordered">
		<thead>
			<th>Nombre</th>
			<th>Descripción</th>
			<th>Usuarios relacionados</th>
			<th>Permisos relacionados</th>
		</thead>
		<tbody>
			@foreach($roles as $rol)
				<tr>
					<td><a href="{{ action('RolesController@edit', $rol->id) }}">{{ $rol->display_name }}</a></td>
					<td>{{ $rol->description }}</td>
					<td>
						<ul class="list-inline">
							@foreach($rol->users as $user)
								<li><a href="{{ action('UserController@edit', $user->id) }}">{{ $user->name }}</a></li>
							@endforeach
						</ul>
					</td>
					<td>
						<ul class="list-inline">
							@foreach($rol->perms as $perms)
								<li><a href="{{ action('PermissionsController@edit', $perms->id) }}">{{ $perms->display_name }}</a></li>
							@endforeach
						</ul>
					</td>
				</tr>
			@endforeach
		</tbody>
	</table>
@stop