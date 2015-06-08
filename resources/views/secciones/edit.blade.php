@extends('app')

@section('title', 'Editar sección')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('secciones') }}">Administración de secciones administrativas</a></li>
		<li><a href="#!">Editando {{ $seccion->name }}</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::model($seccion, ['method' => 'PUT', 'action' => ['SeccionesController@update', $seccion->id]]) !!}
			@include('secciones._form', ['submitButtonText' => 'Guardar'])
		{!! Form::close() !!}
	</div>
@stop