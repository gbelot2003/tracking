@extends('app')

@section('title', 'Administración de Cargos')

@section('link-button')
	<a class="btn btn-primary" href="{{ action('CargosController@create') }}">Nuevo Cargo</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('cargos') }}">Administración de Cargos</a></li>
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
		@foreach($cargos as $cargo)
			<tr>
				<td>{{ $cargo->id }}</td>
				<td><a href="{{ action('CargosController@edit', $cargo->id) }}">{{ $cargo->name }}</a></td>
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