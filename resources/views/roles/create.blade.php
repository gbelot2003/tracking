@extends('app')

@section('title', 'Creación de Roles')

@section('post-script')
	<script>
		$('#perm-select').select2({
			placeholder: 'Escoge un permiso'
		});
	</script>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('roles') }}">Administración de Roles</a></li>
		<li><a href="#">Creación de nuevo rol</a></li>
	</ol>
@stop

@section('content')

	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::open(['url' => 'roles']) !!}
			@include('roles._form', ['submitButtonText' => 'Crear'])
		{!! Form::close() !!}
	</div>
@stop
