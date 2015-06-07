@extends('app')

@section('title', 'Administración de Bolsas')

@section('link-button')
	<a id="virtual-form" class="btn btn-primary" href="{{ action('BolsasController@create') }}">Nueva Bolsa</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('bolsas') }}">Administración de Bolsas</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')

			<table id="shipments" class="table table-bordered table-hover">
				<caption>Agregar encomiendas a la bolsa</caption>
				<thead>
					<th>Guia de Bolsa</th>
					<th>Destino</th>
					<th>Hora</th>
				</thead>
			</table>

@stop