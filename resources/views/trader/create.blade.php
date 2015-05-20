@extends('app')

@section('title', 'Ingresar Registro')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('personal') }}">Administración de Personal</a></li>
		<li><a href="#!">Creación de registro de personal</a></li>
	</ol>
@stop
