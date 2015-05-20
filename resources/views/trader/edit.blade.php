@extends('app')

@section('title', 'Editar Registro')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('personal') }}">Administración de Personal</a></li>
		<li><a href="#!">Edición de </a></li>
	</ol>
@stop
