@extends('app')

@section('title', 'Administración de secciones administrativass')

@section('link-button')
	<a class="btn btn-primary" href="{{ action('UserController@create') }}">Nueva Seccion</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('secciones') }}">Administración de secciones administrativas</a></li>
	</ol>
@stop
