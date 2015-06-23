@extends('app-ui')

@section('title', 'Reportes de encomiendas por fecha y estados')
@section('link-button')
	<div class="btn-group hidden-print">
		<a type="button" onclick="window.print();return false;" class="btn">Imprimir</a>
	</div>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb hidden-print">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="#">Reportes de encomiendas por fecha y estados</a></li>
	</ol>
@stop

@section('content')
	<div id="reportes-entrega">
		@include('reportes.entregas._entregas')
		@include('reportes.entregas.entregas-result')
	</div>
@stop

@section('post-script')
	<script src="{{ URL::asset("js/vue-reports.js") }}"></script>
	<style type="text/css" media="print">
		.smaller{font-size: 0.7rem;}
		table th {font-size: 0.7rem;font-weight: bold;}
		td div {font-weight: bold;}
		table tr{page-break-after: always;page-break-inside: avoid;	-webkit-region-break-inside: avoid;}
	</style>
@stop