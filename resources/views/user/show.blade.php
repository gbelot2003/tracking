@extends('app')

@section('title')
	{{ $user->name }}
@stop

@section('link-button')
	<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('UserController@edit' ,$user->id) }}">Editar Usuario</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('user') }}">Administración de usuarios</a></li>
		<li><a href="#">{{ $user->name }}</a></li>
	</ol>
@stop
@section('content')
	@include('partials.flash')
	<div class="row">

		<div class="col-md-12">
			@include('user._usuarios_relacionados')
		</div>

		<div class="col-md-12">

		</div>
	</div>
@stop