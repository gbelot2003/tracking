@extends('app')

@section('title', 'Ingresar nuevo establecimiento')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('establecimientos') }}">Administración de Sucursales</a></li>
		<li><a href="#!">Nuevo establecimiento</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::open(['action' => ['EstablecimientosController@store']]) !!}
		@include('establecimientos._form', ['submitButtonText' => 'Registrar'])
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