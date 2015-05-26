
@extends('app')

@section('title')
	Nuevo Transito de <b style="color: red">{{ $paquete->code }}</b>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Listado de encomiendas</a></li>
		<li><a href="{{ action('ShipmentCotroller@show', $paquete->id) }}">{{ $paquete->code }}</a></li>
		<li><a href="#!">Nuevo transito</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	@include('errors.form-error')


	{!! Form::open(['action' => ['TransitosController@store'], 'files' => 'true']) !!}
	<div class="col-md-12">
		<div class="form-group" style="float: right">
			{!! Form::submit('enviar', ['class' => 'btn btn-primary']) !!}
		</div>
	</div>
	<div class="col-md-12">
		{!! Form::hidden('shipment_id', $paquete->id) !!}
		<!-- sender Form Input -->
		<div class="form-group">
			{!! Form::select('estado_id', $estado, null, ['class' => 'select form-control', 'id' => 'estado-select']) !!}
		</div>

		<!-- Detail Form Input -->
		<div class="form-group">
			{!! Form::label('detail', "Detalles y notas:") !!}
			{!! Form::textarea("details", null, ['class' => 'form-control']) !!}
		</div>
		<div class="col-md-4">
			<div class="form-group">
				{!! Form::label('image', "Firma:") !!}
				{!! Form::file('image[]', ['multiple'=> 'true'], ['class' => 'form_contro']) !!}
			</div>
		</div>
		<div class="col-md-4">
			<div class="form-group">
				{!! Form::label("Nombre:") !!}
				{!! Form::file('image[]', ['multiple'=> 'true'], ['class' => 'form_contro']) !!}
			</div>
		</div>
		<div class="col-md-4">
			<div class="form-group">
				{!! Form::label('image', "Fotografía:") !!}
				{!! Form::file('image[]', ['multiple'=> 'true'], ['class' => 'form_contro']) !!}
			</div>
		</div>
	</div>
	{!! Form::close() !!}

	<hr class="divier"/>

	<div class="col-md-12">
		<div class="row">
			<div class="col-md-12">
				<div class="well">
					<h4>Descripción</h4>
					<p>{{ $paquete->description }}</p>
				</div>
			</div>

			<div class="col-md-6">
				@include('shipments._reciver')
			</div>

			<div class="col-md-6">
				@include('shipments._sender')
			</div>

		</div>
	</div>
@stop
@section('post-script')
	<script>
		$('#estado-select').select2();

	</script>
@stop