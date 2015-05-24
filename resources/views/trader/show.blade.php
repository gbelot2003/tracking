@extends('app')

@section('title', 'Registro')

@section('link-button')
	<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('TraderController@edit' ,$trader->id) }}">Editar Registro</a>
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
		@include('trader._informacion_individual')

		@include('trader._ultimas_encomiendas')
	</div>
@stop