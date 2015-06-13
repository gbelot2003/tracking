@extends('app')

@section('title', 'Creación de Bolsas')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('bolsas') }}">Administración de Bolsas</a></li>
		<li><a href="#!">Creación de Bolsas</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('partials.flash')
		@include('errors.form-error')

		<div id="listados" class="list-group">

			{!! Form::open(['action' => ['BolsasController@store']]) !!}
				@include('bolsas._form')
			{!! Form::close() !!}

			<hr/>

			@include('bolsas._create_table')
		</div>
	</div>
@stop
@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
	<script src="{{ URL::asset("js/vue.js") }}"></script>
@stop