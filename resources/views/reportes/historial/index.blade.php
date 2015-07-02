@extends('app-ui')

@section('title', 'Reportes de Historial')
@section('link-button')
	<div class="btn-group hidden-print">
		<a type="button" onclick="window.print();return false;" class="btn">Imprimir</a>
	</div>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb hidden-print col-md-12">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="#">Reportes de encomiendas por usuarios</a></li>
	</ol>
@stop