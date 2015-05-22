@extends('app')

@section('title', 'Editando registro encomienda')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Administración de encomiendas</a></li>
		<li><a href="#!">Editando registro encomienda</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	@include('errors.form-error')

@stop