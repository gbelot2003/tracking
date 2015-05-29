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
		@include('partials.flash')
		@include('errors.form-error')
		<div class="options">
			<ul class="list-inline">
				<li><a href="#!" class="inline" id="perfil">Crear nuevo perfil</a></li>
			</ul>
		</div>
		<div id="create-form" class="col-md-12">

		</div>
		{!! Form::open(['action' => ['ShipmentCotroller@store']]) !!}
			@include('shipments._form',['submitButtonText' => 'Registrar'])
		{!! Form::close() !!}
	</div>
@stop
@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
@stop