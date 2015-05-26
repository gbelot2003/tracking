@extends('app')

@section('title')
	Ficha de encomienda No. {{ $paquete->code }}
@stop
@section('link-button')
	@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor']))
	<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('ShipmentCotroller@edit' ,$paquete->id) }}">Editar Registro</a>
	@endif
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Listado de encomiendas</a></li>
		<li><a href="{{ action('ShipmentCotroller@show', $paquete->id) }}">{{ $paquete->code }}</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	@include('errors.form-error')

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
	<div class="col-md-12">
		<div class="row">
			<div class="col-md-7">
				<h3>Transitos</h3>
			</div>
			<div class="col-md-5">
				{!! Form::open(['action' => ['TransitosController@store']]) !!}
					{!! Form::submit('Transito', ['class' => 'btn btn-primary']) !!}
					{!! Form::hidden('estado_id', 2) !!}
					{!! Form::hidden('shipment_id', $paquete->id) !!}
					{!! Form::hidden('details', "Todo Correcto") !!}
					<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('TransitosController@create', $paquete->id) }}">Transito observaciones</a>
				{!! Form::close() !!}
			</div>
		</div>

		<table class="table table-hover table-border">
			<caption>Estados de transito de esta encomienda</caption>
			<thead>
				<th>Estado</th>
				<th>Usuario</th>
				<th>Detalles</th>
				<th>Hora</th>
			</thead>
			<tbody>
				@foreach($paquete->transitos as $transito)
				<tr>
					<td>{{ $transito->estados->name }}</td>
					<td>{{ $transito->user->name }}</td>
					<td>{{ $transito->details }}</td>
					<td>{{ $transito->created_at }}</td>
				</tr>
				@endforeach
			</tbody>
		</table>
	</div>
@stop