@extends('app')

@section('title', 'Administración de Encomiendas')

@section('link-button')
	<a id="virtual-form" class="btn btn-primary" href="{{ action('ListadosController@getListadosPersonas') }}">Nueva encomienda</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Administración de Encomiendas</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	<div class="table-responsive">
		<table id="shipmentsTable" class="table table-hover">
			<thead>
			<th>No. Guia</th>
			<th>Remitente</th>
			<th>Destinatario</th>
			<th>Descripción</th>
			<th>Estado</th>
			</thead>
		</table>
	</div>

@stop
@section('post-script')

	<script>
		(function(){
			$(document).ready(function(){
				var table = $('#shipmentsTable').DataTable({
					"pageLength": 5,
					"order": [[ 0, "desc" ]],
					processing: true,
					serverSide: true,
					ajax: '{{ URL::to("listados/shipments") }}',
					columns: [
						{data: 'code', name: "code",
							render: function(data, type, full, meta){
								return "<a href='shipments/" + full.id + "' >" + full.code + "</a>"
							}
						},
						{data: 'sender', name: 'sender.last_name',
							render: function (data, type, full, meta) {
								return "<div class='col-md-12'>" +
										"<b>"+ full.sender_agen +"</b>"+
										"</div>" +
										"<div class='col-md-12'>" +
											"<a href='personal/" + full.sid + "'>" + full.sender_first + " " + full.sender_last +"</a>" +
										"</div>" +
										"<div class='col-md-12'>" +
											"<b>" + full.sender_section + "</b>"
										"</div>"
							}
						},
						{data: 'reciber', name: 'reciber.last_name',
							render: function(data, type, full, meta){
								return "<div class='col-md-12'>" +
										"<b>"+ full.reciber_agen +"</b>"+
										"</div>" +
										"<div class='col-md-12'>" +
											"<a href='personal/" + full.rid + "' >" + full.reciber_first + " " + full.reciber_last +"</a>" +
										"</div>"+
										"<div class='col-md-12'>" +
										"<b>" + full.reciber_section + "</b>"
										"</div>"
							},
							searchable: false
						},
						{data: 'description', name: 'shipments.description', searchable: false},
						{data:null,
							render: function(data, type, full, meta){
								return "<a class='estado' href='listados/shipmentstate/" + full.id + "'> ver" + "</a>"
							}
						}
					],
					"createdRow": function( row, data, dataIndex ){
						var links = $(row).find('.estado');
						links.on('click', function(e){
							e.preventDefault();
							$(this).colorbox();
						});
					},
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

				setInterval( function () {
					table.ajax.reload();
				}, 30000 );


				var search_thread = null;
				$(".dataTables_filter input")
				.unbind()
				.bind("input", function(e) {
					clearTimeout(search_thread);
					search_thread = setTimeout(function(){
						var dtable = $("#shipmentsTable").dataTable().api();
						var elem = $(".dataTables_filter input");
						return dtable.search($(elem).val()).draw();
					}, 800);
				});
			});

		})();

	</script>
@stop
