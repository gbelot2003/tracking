@extends('app')

@section('title', 'Crear nuevo cargo')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('cargos') }}">Administración de Cargos</a></li>
		<li><a href="#!">Creación de Cargos</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::open(['action' => ['SeccionesController@store']]) !!}
			@include('cargos._form', ['submitButtonText' => 'Crear Cargo'])
		{!! Form::close() !!}
	</div>
@stop