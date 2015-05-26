@extends('app')

@section('title', 'Administración de secciones administrativas')

@section('link-button')
	<a id="virtual-form" class="btn btn-primary" href="{{ action('SeccionesController@create') }}">Nueva Sección</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('secciones') }}">Administración de secciones administrativas</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')

	<table id="table" class="table table-bordered">
		<thead>
			<th>No.</th>
			<th>Nombre</th>
		</thead>
		<tbody>
		@foreach($seccion as $seccion)
			<tr>
				<td>{{ $seccion->id }}</td>
				<td><a href="{{ action('SeccionesController@edit', $seccion->id) }}">{{ $seccion->name }}</a></td>
			</tr>
		@endforeach
		</tbody>
	</table>
@stop

@section('post-script')
	<script>
		$(document).ready(function(){
			$('#table').DataTable({
				"pageLength": 10
			});
		});
	</script>

@stop
