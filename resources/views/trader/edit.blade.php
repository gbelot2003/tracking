@extends('app')

@section('title')
	Editando registro de {{ $trader->last_name }}, {{ $trader->first_name }}
@stop


@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('personal') }}">Administración de Personal</a></li>
		<li><a href="{{ action('TraderController@show', $trader->id) }}">{{ $trader->last_name }}, {{ $trader->first_name }}</a></li>
		<li><a href="#!">Edición {{ $trader->last_name }}, {{ $trader->first_name }} </a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	<div class="col-md-12">
		{!! Form::model( $trader,  ['method' => 'PUT', 'action' => ['TraderController@update', $trader->id]]) !!}
		@include('trader._form', ['submitButtonText' => 'Editar'])
		{!! Form::close() !!}
	</div>
@stop

@section('post-script')
	<script>
		$('#establecimiento-select').select2({
			placeholder: 'Escoge una Sucursal'
		});
		$('#secciones-select').select2({
			placeholder: 'Escoge una Sección'
		});
		$('#cargo-select').select2({
			placeholder: 'Escoge una Sección'
		});
	</script>
@stop
