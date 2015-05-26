@extends('app')

@section('title', 'Editar cargo')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('cargos') }}">Administración de Cargos</a></li>
		<li><a href="#!">Edición de {{ $cargo->name }}</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::model($cargo, ['method' => 'PUT', 'action' => ['CargosController@update', $cargo->id]]) !!}
		@include('cargos._form', ['submitButtonText' => 'Crear Cargo'])
		{!! Form::close() !!}
	</div>
@stop