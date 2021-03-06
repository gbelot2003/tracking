@extends('app')

@section('title', 'Listado de sucursales y establecimientos')

@section('link-button')
	<a class="btn btn-primary" href="{{ action('EstablecimientosController@create') }}">Nueva Sucursal</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('establecimientos') }}">Administración de Sucursales</a></li>
	</ol>
@stop

@section('content')
	@include('errors.form-error')

	<table id="table" class="table table-bordered">
		<thead>
			<th>Numero</th>
			<th>Nombre</th>
			<th>Departamento</th>
			<th>Municipio</th>
			<th>Dirección</th>
			<th>Empresa</th>
		</thead>
		<tbody>
		@foreach($establecimientos as $data)
			<tr>
				<td>{{ $data->id }}</td>
				<td><a href="{{ action('EstablecimientosController@edit', $data->id) }}">{{ $data->name }}</a></td>
				<td>{{ $data->departamento->departamento }}</td>
				<td>{{ $data->municipio->municipio }}</td>
				<td>{{ $data->address }}</td>
				<td>{{ $data->empresa->name }}</td>
			</tr>
		@endforeach
		</tbody>
	</table>
@stop

@section('post-script')
	<script>
		$(function() {
			$('#table').DataTable({
				"language": {
					"lengthMenu": "Mostrar _MENU_ registros por página",
					"zeroRecords": "Registro no encotrado - lo sentimos",
					"info": "Mostrando página _PAGE_ de _PAGES_",
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