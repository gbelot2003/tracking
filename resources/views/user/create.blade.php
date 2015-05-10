@extends('app')

@section('title', 'Creación de nuevo usuario')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('user') }}">Administración de usuarios</a></li>
		<li><a href="#">Creación de nuevo usuario</a></li>
	</ol>
@stop
@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::open(['url' => 'user']) !!}
		@include('user._form', ['submitButtonText' => 'crear'])
		{!! Form::close() !!}
	</div>
@stop