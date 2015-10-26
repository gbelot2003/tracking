@extends('app')
@section('title', 'Encomiendas por estado "' . $tEstado->name . '" Mes ' . $tMes . '-' . $tAnio)
@section('breadcrumbs')
	<ol class="breadcrumb hidden-print">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('reportes/reporte-rango-mensual/') }}">Consulta rango mensual</a></li>
		<li><a href="">Listado de reporte mensual</a></li>
	</ol>
@stop
@section('content')
	<div>
		<h4>Total de Registros : <span class="info">{{ $total }}</span></h4>
	</div>
	<table class="table table-borderd">
		<thead>
			<tr>
				<th>No. Guía</th>
				<th>Encargado</th>
				<th>Remitente</th>
				<th>Destinatario</th>
				<th>Inicio</th>
				<th>Ultimo transito</th>
			</tr>
		</thead>
		<tbody>
			@foreach($shipments as $item)
			<tr>
				<td><a target="_blank" href="/shipments/{{ $item->id }}">{{ $item->code }}</a></td>
				<td>{{ $item->user->name }}</td>
				<td>{{ $item->sender_id }}</td>
				<td>{{ $item->reciber_id }}</td>
				<td>{{ $item->created_at }}</td>
				<td>{{ $item->updated_at }}</td>
			</tr>
			@endforeach
		</tbody>
	</table>
	{!! $shipments->render() !!}
@stop