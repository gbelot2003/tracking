@extends('app')

@section('title', 'Administración de Permisos')

@section('link-button')
	<a class="btn btn-primary" href="{{ action('PermissionsController@create') }}">Nuevo Permiso</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('premisos') }}">Administración de Permisos</a></li>
	</ol>
@stop

@section('content')

	@include('partials.flash')

<table class="table table-hover table-bordered">
		<thead>
		<th>Nombre</th>
		<th>Descripción</th>
		<th>Roles relacionados</th>
		</thead>
		<tbody>
		@foreach($perms as $perm)
			<tr>
				<td><a href="{{ action('PermissionsController@edit', $perm->id) }}">{{ $perm->display_name }}</a></td>
				<td>{{ $perm->description }}</td>
				<td>
					<ul class="list-inline">
						@foreach($perm->roles as $rol)
							<li><a href="{{ action('RolesController@edit', $rol->id) }}">{{ $rol->name }}</a></li>
						@endforeach
					</ul>
				</td>
			</tr>
		@endforeach
		</tbody>
	</table>
@stop