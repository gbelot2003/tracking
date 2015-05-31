@extends('app')

@section('title', 'Administración de Usuarios')

@section('link-button')
	<a class="btn btn-primary" href="{{ action('UserController@create') }}">Nuevo Usuario</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('user') }}">Administración de Usuarios</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')

	<table id="users-table" class="table table-condensed">
		<thead>
		<th>Nombre</th>
		<th>email</th>
		<th>Roles</th>
		<th>Area</th>
		</thead>
		<tbody>
		@foreach($users as $user)
			<tr>
				<td><a href="{{ action('UserController@show', $user->id) }}">{{ $user->name }}</a></td>
				<td>{{ $user->email }}</td>
				<td>
					@foreach($user->roles as $role)
						{{ $role->name }}
					@endforeach
				</td>
				<td>{{ $user->area->areas }}</td>
			</tr>
		@endforeach
		</tbody>
	</table>
@stop

@section('post-script')
	<script>
		$(function() {
			$('#users-table').DataTable();
		});
	</script>
@stop