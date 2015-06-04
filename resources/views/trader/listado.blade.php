@extends('app')

@section('title', 'Listado de Remitentes')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('personal') }}">Listado de Remitentes</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	<table id="table" class="table table-bordered table-responsive">
		<caption>Busqua el nombre del usuario remitender de la encomienda y has <b>click</b> para enlasar el formulario</caption>
		<thead>
		<th>Apellidos</th>
		<th>Nombres</th>
		<th>Nombre Completo</th>
		<th>Establecimento</th>
		<th>Sección</th>
		<th>Estado</th>
		</thead>
		<tbody>

		</tbody>
	</table>
@stop
@section('post-script')
	<script>
		$(document).ready(function(){
			$('#table').DataTable({
				processing: true,
				serverSide: true,
				ajax: '{{ URL::to("listados/personal") }}',
				columns: [
					{data: 'last_name', name: 'traders.last_name', "visible": false},
					{data: 'first_name', name: 'traders.first_name', "visible": false},
					{data: null, name: 'nombre_completo', "searchable": false, render: function( data, type, full, meta){
						return "<a href='/shipments/create/"+ full.id +"' >" + full.first_name + " " + full.last_name + "</a>"
					}},
					{data: 'name', name: 'establecimientos.name'},
					{data: 'seccion', name: 'seccions.name'},
					{data: 'estado', name: 'userstatuses.name'}
				],
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
