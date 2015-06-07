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
		<th>Empresa</th>
		<th>Establecimiento asignado</th>
		@if(Auth::user()->hasRole(['owner']))
			<th>Estado</th>
			<th>Activo Desde</th>
		@endif
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
				<td>{{ $user->empresa->name }}</td>
				<td>{{ $user->establecimiento->name }}</td>
				@if(Auth::user()->hasRole(['owner']))
					<td>{{ $user->estado->name }}</td>
					<td>{{ $user->created_at }}</td>
				@endif
			</tr>
		@endforeach
		</tbody>
	</table>
@stop

@section('post-script')
	<script>
		$(function() {
			$('#users-table').DataTable({
				"language": {
					"lengthMenu": "Mostrar _MENU_ registros por página",
					"zeroRecords": "Registro no encotrado - lo sentimos",
					"info": "Mostrando pgina _PAGE_ de _PAGES_",
					"infoEmpty": "No hay registros de esa busqueda",
					"infoFiltered": "(filtrado de _MAX_ total Total de regístros)",
					"search":  "Busqueda:",
					"paginate": {
						"first":      "Primero",
						"last":       "Ultimo",
						"next":       "Siguiente",
						"previous":   "Anterior"
					}
				}
			});
		});
	</script>
@stop