@extends('app')

@section('title')
	Guia No. {{ $paquete->code }}
@stop
@section('link-button')
	@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor']))
	<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('ShipmentCotroller@edit' ,$paquete->id) }}">Editar Registro</a>
	@endif
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Administración de Encomiendas</a></li>
		<li><a href="{{ action('ShipmentCotroller@show', $paquete->id) }}">{{ $paquete->code }}</a></li>
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
	<div class="col-md-12">
		@include('shipments._rel_transitos')
	</div>
@stop
@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
@stop