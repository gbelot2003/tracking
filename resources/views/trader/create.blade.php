@extends('app')

@section('title', 'Ingresar Registro')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('personal') }}">Administración de Personal</a></li>
		<li><a href="#!">Creación de registro de personal</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	<div class="col-md-12">
		{!! Form::open(['action' => ['TraderController@store']]) !!}
		@include('trader._form', ['submitButtonText' => 'crear'])
		{!! Form::close() !!}
	</div>
@stop

@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
@stop

