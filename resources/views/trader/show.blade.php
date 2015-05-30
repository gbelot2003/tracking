@extends('app')

@section('title', 'Registro')

@section('link-button')
	@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor']))
		<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('TraderController@edit' ,$trader->id) }}">Editar Registro</a>
	@endif
	@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor', 'cliente']))
	<a class="btn btn-primary" href="{{ action('ShipmentCotroller@create') }}">Nuevo Paquete</a>
	@endif
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('personal') }}">Administración de Personal</a></li>
		<li><a href="{{ action('TraderController@show', $trader->id) }}">{{ $trader->last_name }}, {{ $trader->first_name }}</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	<div class="row">

		<div class="col-md-6">
			@include('trader._informacion_individual')
		</div>
		<div class="col-md-6">
			@include('trader._ultimas_encomiendas')
		</div>
	</div>
@stop