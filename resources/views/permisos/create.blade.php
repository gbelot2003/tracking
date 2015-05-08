@extends('app')
@section('title', 'Creación de permiso')
@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('permisos') }}">Administración de Permisos</a></li>
		<li><a href="#">Creación de Permisos</a></li>
	</ol>
@stop
@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::open(['url' => 'permisos']) !!}
		@include('permisos._form', ['submitButtonText' => 'Crear'])
		{!! Form::close() !!}
	</div>
@stop