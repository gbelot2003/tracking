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
		</thead>
	</table>
@stop

@section('post-script')
	<script>
		$(function() {
			$('#users-table').DataTable({
				processing: true,
				serverSide: true,
				ajax: '{{ url("listados/usuarios-data") }}'
			});
		});
	</script>
@stop