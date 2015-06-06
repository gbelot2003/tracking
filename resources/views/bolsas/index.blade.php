@extends('app')

@section('title', 'Administración de Bolsas')

@section('link-button')
	<a id="virtual-form" class="btn btn-primary" href="{{ action('ListadosController@getListadosPersonas') }}">Nueva Bolsa</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('bolsas') }}">Administración de Bolsas</a></li>
	</ol>
@stop