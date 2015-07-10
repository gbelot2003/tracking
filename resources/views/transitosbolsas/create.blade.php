
@extends('app')

@section('title')
	Transito de Bolsa <b style="color: red">{{ $bolsa->code }}</b>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('bolsas') }}">Listado de encomiendas</a></li>
		<li><a href="{{ action('BolsasController@edit', $bolsa->id) }}">{{ $bolsa->code }}</a></li>
		<li><a href="#!">Nuevo tránsito</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	@include('errors.form-error')


	{!! Form::open(['action' => ['TransitosBolsasController@store'], 'files' => 'true']) !!}
	<div class="col-md-12">

	</div>
	<div class="col-md-12">
		{!! Form::hidden('bolsa_id', $bolsa->id) !!}
		<!-- sender Form Input -->
		<div class="form-group">
			{!! Form::select('estado_id', $estado, null, ['class' => 'select form-control', 'id' => 'estado-select']) !!}
		</div>

		<!-- Detail Form Input -->
		<div class="form-group">
			{!! Form::label('detail', "Detalles y notas:") !!}
			{!! Form::textarea("details", null, ['class' => 'form-control']) !!}
		</div>
		<div class="col-md-6">
			<div class="form-group">
				{!! Form::label('firma', "Firma:") !!}
				{!! Form::file('firma', ['multiple'=> 'true'], ['class' => 'form_contro']) !!}
			</div>
		</div>
		<div class="col-md-6">
			<div class="form-group">
				{!! Form::label('foto', "Fotografía:") !!}
				{!! Form::file('foto', ['multiple'=> 'true'], ['class' => 'form_contro']) !!}
			</div>
		</div>
		<div class="col-md-12">
			<div class="form-group" style="float: right">
				{!! Form::submit('enviar', ['class' => 'btn btn-primary']) !!}
			</div>
		</div>

	</div>
	{!! Form::close() !!}

@stop