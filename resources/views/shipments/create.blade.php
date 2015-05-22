@extends('app')

@section('title', 'Creación de nueva encomienda')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Administración de encomiendas</a></li>
		<li><a href="{{ url('shipments/create') }}">Creación de nueva encomienda</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::open(['action' => ['ShipmentCotroller@store']]) !!}

		{!! Form::close() !!}
	</div>
@stop