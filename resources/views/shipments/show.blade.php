@extends('app')

@section('title')
	Ficha de encomienda No. {{ $paquete->id }}
@stop
@section('link-button')
	<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('ShipmentCotroller@edit' ,$paquete->id) }}">Editar Registro</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Listado de encomiendas</a></li>
		<li><a href="{{ action('ShipmentCotroller@show', $paquete->id) }}">Encomienda No. {{ $paquete->id }}</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	@include('errors.form-error')

	<div class="col-md-12">
		<div class="row">
			<div class="col-md-12">
				<div class="well">
					<h4>Descripción</h4>
					<p>{{ $paquete->description }}</p>
				</div>
			</div>
			<div class="col-md-6">
				@include('shipments._sender')
			</div>

			<div class="col-md-6">
				@include('shipments._reciver')
			</div>
		</div>
	</div>
@stop