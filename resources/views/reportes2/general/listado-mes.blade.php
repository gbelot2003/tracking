@extends('app')

@section('title', 'Reportes General, Listado')

@section('breadcrumbs')
	<ol class="breadcrumb hidden-print">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('reportes/reporte-general/' . $inicio) }}">Reportes General</a></li>
	</ol>
@stop

@section('content')
	<table class="table table-bordered">
		<thead>
			<tr>
				<th>Días del mes</th>
				<th>Subtotal</th>
			</tr>
		</thead>
		<tbody>
		@foreach($shipments as $item)
		<tr>
			<td><a target="_blank" href="/reportes/reporte-general-listado-dia/{{ $item->year }}-{{$item->mes}}-{{ $item->dia }}">{{ $item->mes }}-{{ $item->dia }}</a></td>
			<td>{{ $item->subtotal }}</td>
		</tr>
		@endforeach
		</tbody>
		<tfooter>
			<tr>
				<td><strong>Total</strong></td>
				<td><strong>{{ $total }}</strong></td>
			</tr>
		</tfooter>
	</table>
	{!! $shipments->render() !!}
@stop