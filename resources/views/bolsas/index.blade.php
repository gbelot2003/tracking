@extends('app')

@section('title', 'Administración de Bolsas')
	@section('link-button')
		<a id="virtual-form" class="btn btn-primary" href="{{ action('BolsasController@create') }}">Crear Bolsa</a>
	@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('bolsas') }}">Administración de Bolsas</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	@include('errors.form-error')
	<div class="col-md-12">
	</div>
			<table id="shipments" class="table table-bordered table-hover">
				<caption>Agregar encomiendas a la bolsa</caption>
				<thead>
					<th>Guia de Bolsa</th>
					<th>Destino</th>
					<th>Usuario</th>
					<th>Estado</th>
					<th>Hora</th>
					<th>Transito</th>
				</thead>
				<tbody>
				@foreach($bolsas as $bolsa)
					<tr>
						<td><a href="{{ action('BolsasController@edit', $bolsa->id) }}">{{ $bolsa->code }}</a></td>
						<td>{{ $bolsa->reciber->name }}</td>
						<td>{{ $bolsa->user->name }}</td>
						<td>{{ $bolsa->estado->name }}, {{ $bolsa->sender->name }}</td>
						<td>{{ $bolsa->created_at }}</td>
						<td>
							@foreach($bolsa->bolsastransito->slice(0, 1) as $transito)
							{{ $bolsa->estado->name }}
							@endforeach
						</td>
					</tr>
				@endforeach
				</tbody>
			</table>
@stop