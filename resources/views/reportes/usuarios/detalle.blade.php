@extends('app-ui')

@section('title', 'Reportes de encomiendas por usuarios')

@section('breadcrumbs')
	<ol class="breadcrumb hidden-print col-md-12">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('/reportes/reporte-usuarios/') }}">Reportes de encomiendas por usuarios</a></li>
		<li><a href="#">Reportes de encomiendas de {{ $user->name }}</a></li>
	</ol>
@stop

@section('content')
	<div class="row" id="reportes-usuarios">
		@include('reportes.usuarios._filtros')
		<hr/>
		@include('reportes.usuarios._resultados')
		<pre>@{{ $data | json }}</pre>
	</div>
@stop
@section('post-script')
	<script src="{{ URL::asset("js/vue-reportes-usuaios.js") }}"></script>
	<style type="text/css" media="print">
		.smaller{font-size: 0.7rem;}
		table th {font-size: 0.7rem;font-weight: bold;}
		td div {font-weight: bold;}
		table tr{page-break-after: always;page-break-inside: avoid;	-webkit-region-break-inside: avoid;}
	</style>
@stop