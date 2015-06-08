@extends('app')

@section('title', 'Edición de permiso')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('permisos') }}">Administración de Permisos</a></li>
		<li><a href="#">Edición de {{ $perm->display_name }}</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::model($perm, ['method' => 'PUT', 'action' => ['PermissionsController@update', $perm->id]]) !!}
		@include('permisos._form', ['submitButtonText' => 'Guardar'])
		{!! Form::close() !!}
	</div>
@stop