@extends('app-ui')

@section('title', 'Reportes de encomiendas entregadas')

@section('breadcrumbs')
	<ol class="breadcrumb hidden-print">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('roles') }}">Reportes de encomiendas </a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12 hidden-print">
		<div class="col-md-12">
			<div class="btn-group">
				<a type="button" href="" class="btn">Imprimir</a>
			</div>
		</div>
	</div>
	<hr class="hidden-print"/>
	<div id="reportes-entrega">



		@include('reportes._entregas')
		@include('reportes.entregas-result')
	</div>
@stop

@section('post-script')
	<script src="{{ URL::asset("js/vue-reports.js") }}"></script>
	<script>

		$('#establecimiento-select').select2({
			click: function(data){
				console.log(data)
			}
		});

	</script>

	<style type="text/css" media="screen">
		.fecha{
			width: 100%;
			height: 2.8rem;
			border-radius: 5px;
			text-align: right;
			padding-right: 10px;
		}
	</style>

	<style type="text/css" media="print">
		.smaller{font-size: 0.7rem;}
		table th {font-size: 0.7rem;font-weight: bold;}
		td div {font-weight: bold;}
		table tr{page-break-after: always;page-break-inside: avoid;	-webkit-region-break-inside: avoid;}
	</style>
@stop