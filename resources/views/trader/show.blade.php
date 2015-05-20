@extends('app')

@section('title', 'Registro')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('personal') }}">Administración de Personal</a></li>
		<li><a href="#!">{{ $trader->last_name }}, {{ $trader->first_name }}</a></li>
	</ol>
@stop