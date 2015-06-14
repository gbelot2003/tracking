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
		<caption style="color: #954121">Localiza el nombre del <b>remitente</b> de la encomienda y has <b>click en su nombre</b> abajo en la tabla para enlasar el formulario de creación de encomiendas</caption>
		<thead>
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
					{data: 'name', name: 'traders.name', "searchable": true, render: function( data, type, full, meta){
						return "<a href='/shipments/create/"+ full.id +"' >" + full.name + "</a>"
					}},
					{data: 'establecimiento', name: 'establecimientos.name'},
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
