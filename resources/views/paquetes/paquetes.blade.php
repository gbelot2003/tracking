@extends('app')

@section('title', 'Administración de Mis Paquetes')

@section('link-button')
	<a class="btn btn-primary" href="#!">Nuevo Paquete</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('mis-paquetes') }}">Administración de paquetes</a></li>
	</ol>
@stop