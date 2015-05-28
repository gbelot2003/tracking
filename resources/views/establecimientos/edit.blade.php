@extends('app')

@section('title', 'Edición de establecimiento')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('establecimientos') }}">Administración de Sucursales</a></li>
		<li><a href="#!">{{ $establecimiento->name }}</a></li>
	</ol>
@stop
@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::model($establecimiento, ['method' => 'PUT', 'action' => ['EstablecimientosController@update', $establecimiento->id]]) !!}
		@include('establecimientos._form', ['submitButtonText' => 'Editar'])
		{!! Form::close() !!}
	</div>
@stop

@section('post-script')
	<script>
		jQuery(document).ready(function(){
			var mid = $("#dept-select option:selected").val();
			$('#municipios').load("/querys/municipios/" + mid, function(){
				$('#munic-select').select2();
			});

			$('#dept-select').on('change', function(){
				var mid = $("#dept-select option:selected").val();
				$('#municipios').load("/querys/municipios/" + mid, function(){
					$('#munic-select').select2();
				});
			});
		});

		$('#dept-select').select2();
	</script>
@stop