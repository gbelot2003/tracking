@extends('app')

@section('title', 'Administración de Cargos')

@section('link-button')
	<a class="btn btn-primary" href="{{ action('UserController@create') }}">Nuevo Cargo</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('cargos') }}">Administración de Cargos</a></li>
	</ol>
@stop
