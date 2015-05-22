@extends('app')

@section('title', 'Administración de paquetes')

@section('link-button')
	<a id="virtual-form" class="btn btn-primary" href="{{ action('ShipmentCotroller@create') }}">Nuevo Paquete</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Administración de paquetes y encomiendas</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	<table class="table table-hover">
		<thead>
			<th>No.</th>
			<th>Remitente</th>
			<th>Destinatario</th>
			<th>Descripción</th>
		</thead>
		<tbody>
		@foreach($paquetes as $paquete)
			<tr>
				<td>
					<a href="{{ action('ShipmentCotroller@show', $paquete->id) }}">{{ $paquete->id }}</a>
				</td>
				<td>
					<div class="col-md-12">
						<b>{{ $paquete->senders->establecimiento->name }}</b>,
					</div>
					<div class="col-md-12">
						<a href="{{ action('TraderController@show', $paquete->senders->id) }}">
							{{$paquete->senders->first_name}}, {{ $paquete->senders->last_name }}
						</a>
					</div>
					<div class="col-md-12">
						<b>{{ $paquete->senders->cargo->name }}</b>
					</div>
					<div class="col-md-12">
						<b>{{ $paquete->senders->seccion->name }}</b>
					</div>
				</td>
				<td>
					<div class="col-md-12">
						<b>{{ $paquete->recivers->establecimiento->name }}</b>,
					</div>
					<div class="col-md-12">
						<a href="{{ action('TraderController@show', $paquete->recivers->id) }}">
							{{ $paquete->recivers->first_name }}, {{ $paquete->recivers->last_name }}
						</a>
					</div>
					<div class="col-md-12">
						<b>{{ $paquete->recivers->cargo->name }}</b>
					</div>
					<div class="col-md-12">
						<b>{{ $paquete->recivers->seccion->name }}</b>
					</div>

				</td>
				<td>{{ $paquete->description }}</td>
			</tr>
		@endforeach
		</tbody>
	</table>
@stop