@extends('app')

@section('title')
	Guía No. {{ $paquete->code }}
@stop

@section('link-button')
			<div class="hidden-print">
				@if($bolsaCerrada != true)
					@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor']))
						<a id="virtual-form" class="btn btn-material-cyan"  type="button" href="{{ action('ShipmentCotroller@edit' ,$paquete->id) }}">Editar</a>
					@endif
				@endif
				<a type="button" class="btn"  onclick="window.print();return false;">Imprimir</a>
			</div>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb hidden-print">
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
				<div class="well hidden-print">
					<h4>Descripción</h4>
					<p>{{ $paquete->description }}</p>
				</div>
			</div>

			<div class="col-md-6 hidden-print">
				@include('shipments._sender')
			</div>

			<div class="col-md-6 hidden-print">
				@include('shipments._reciver')
			</div>
			@include('shipmentes._print')
		</div>
	</div>
	<div class="col-md-12 hidden-print">
		@include('shipments._rel_transitos')
	</div>
@stop
@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
@stop