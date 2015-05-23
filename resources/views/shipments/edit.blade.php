@extends('app')

@section('title', 'Editando registro encomienda')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Administración de encomiendas</a></li>
		<li><a href="{{ action('ShipmentCotroller@show', $paquete->id) }}">Encomienda No. {{ $paquete->id }}</a></li>
		<li><a href="#!">Editando registro encomienda</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	@include('errors.form-error')
	{!! Form::model($paquete, ['method' => 'PUT', 'action' => ['ShipmentCotroller@update', $paquete->id]]) !!}
		@include('shipments._form',['submitButtonText' => 'Editar'])
	{!! Form::close() !!}
@stop
@section('post-script')
	<script>
		$('#sender-select').select2();
		$('#reciver-select').select2();
	</script>
@stop