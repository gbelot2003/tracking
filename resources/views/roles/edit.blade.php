@extends('app')

@section('title')
Edición de {{ $roles->display_name }}
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('roles') }}">Administración de Roles</a></li>
		<li><a href="#">Edición de {{ $roles->display_name }}</a></li>
	</ol>
@stop

@section('post-script')
<script>
	$('#perm-select').select2({
		placeholder: 'Escoge un permiso'
	});
</script>
@stop

@section('content')
	<div class="col-md-12">
		@include('errors.form-error')

		{!! Form::model($roles, ['method' => 'PUT', 'action' => ['RolesController@update', $roles->id]]) !!}
			@include('roles._form', ['submitButtonText' => 'Guardar'])
		{!! Form::close() !!}
	</div>
@stop

