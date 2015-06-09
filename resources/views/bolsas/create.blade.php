@extends('app')

@section('title', 'Creación de Bolsas')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('bolsas') }}">Administración de Bolsas</a></li>
		<li><a href="#!">Creación de Bolsas</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('partials.flash')
		@include('errors.form-error')

		{!! Form::open() !!}
			@include('bolsas._form')
		{!! Form::close() !!}
	</div>
@stop
@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
@stop