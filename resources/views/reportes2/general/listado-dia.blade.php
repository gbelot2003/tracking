@extends('app')

@section('title', 'Reportes General, Listado diario')

@section('breadcrumbs')
	<ol class="breadcrumb hidden-print">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('home') }}">Mes</a></li>
		<li><a href="{{ url('reportes/reporte-general') }}">Reportes General</a></li>
	</ol>
@stop

@section('content')
	<table class="table table-bordered">
		<thead>
		<tr>
			<th>No. Guía</th>
			<th>Ultimo transito</th>
			<th>Estado</th>
			<th>Descripción</th>
		</tr>
		</thead>
		<tbody>
		@foreach($shipments as $item)
			<tr>
				<td><a target="_blank" href="/shipments/{{$item->id}}">{{ $item->code }}</a></td>
				<td>{{ $item->updated_at }}</td>
				<td>{{ $item->estados->name }}</td>
				<td>{{ $item->description }}</td>
			</tr>
		@endforeach
		</tbody>
	</table>
	{!! $shipments->render() !!}
@stop