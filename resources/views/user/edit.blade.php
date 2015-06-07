@extends('app')

@section('title')
	Edición de {{ $user->name }}
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('user') }}">Administración de usuarios</a></li>
		<li><a href="{{ action('UserController@show', $user->id) }}">{{ $user->name }}</a></li>
		<li><a href="#">Edición de {{ $user->name }}</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('errors.form-error')
		{!! Form::model($user, ['method' => 'PUT', 'action' => ['UserController@update', $user->id]]) !!}
		@include('user._form', ['submitButtonText' => 'Editar'])
		{!! Form::close() !!}
	</div>
@stop

@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
@stop
