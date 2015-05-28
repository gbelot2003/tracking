@extends('app')

@section('title', 'Administración de Personal')

@section('link-button')
	<a id="virtual-form" class="btn btn-primary" href="{{ action('TraderController@create') }}">Nuevo Registro</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('personal') }}">Administración de Personal</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	<table id="table" class="table table-bordered table-responsive">
		<caption>Personal que puede enviar o recibir correspondencia</caption>
		<thead>
			<th>Apellidos</th>
			<th>Nombres</th>
			<th>Establecimento</th>
			<th>Sección</th>
			<th>Operaciones</th>
		</thead>
		<tbody>

		</tbody>
	</table>
@stop

@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
@stop