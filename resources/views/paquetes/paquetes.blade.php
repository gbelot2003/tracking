@extends('app')

@section('title', 'Administración de Mis Paquetes')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('mis-paquetes') }}">Administración de paquetes</a></li>
	</ol>
@stop

@section('content')
	<table class="table table-hover table-border">
		<caption>Listado de mis usuarios relacionados</caption>
		<thead>
			<th>Nombre</th>
			<th>Establecimiento</th>
			<th>Sección</th>
		</thead>
		<tbody>
			@foreach($clientes as $cliente)
				<tr>
					<td><a href="{{ action('TraderController@show', $cliente->id)  }}">{{ $cliente->first_name }} {{ $cliente->last_name }}</a></td>
					<td>{{ $cliente->establecimiento->name}}</td>
					<td>{{ $cliente->seccion->name}}</td>
				</tr>
			@endforeach
		</tbody>
	</table>
@stop