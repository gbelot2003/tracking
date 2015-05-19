@extends('app')

@section('title', 'Ingresar secciones')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('secciones') }}">Administración de secciones administrativas</a></li>
		<li><a href="#!">Crear secciones administrativas</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::open(['action' => ['SeccionesController@store']]) !!}
			@include('secciones._form', ['submitButtonText' => 'Crear nueva sección'])
		{!! Form::close() !!}
	</div>
@stop