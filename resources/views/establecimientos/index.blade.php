@extends('app')

@section('title', 'Listado de sucursales y establecimientos')

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
	<table class="table table-bordered">
		<thead>
			<th>Numero</th>
			<th>Nombre</th>
			<th>Departamento</th>
			<th>Municipio</th>
		</thead>
		<tbody>
		@foreach($establecimientos as $data)
			<tr>
				<td>{{ $data->id }}</td>
				<td>{{ $data->name }}</td>
				<td>{{ $data->departamento->departamento }}</td>
				<td>{{ $data->municipio->municipio }}</td>
			</tr>
		@endforeach
		</tbody>
	</table>
@stop