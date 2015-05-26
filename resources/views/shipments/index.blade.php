@extends('app')

@section('title', 'Administración de encomiendas')

@section('link-button')
	<a id="virtual-form" class="btn btn-primary" href="{{ action('ShipmentCotroller@create') }}">Nueva encomienda</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Administración de encomiendas</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	@include('shipments._indexTable')
@stop
@section('post-script')
	<script>
		$(document).ready(function(){
			$('#table').DataTable({
				"pageLength": 5,
				"order": [[ 0, "desc" ]]
			});
		});
	</script>

@stop
