@extends('app')
@section('title', 'Reportes General de Encomientas')

@section('content')
	<div id="reportes">
		<div class="text-right hidden-sm hidden-xs">
			<button type="button" class="btn btn-fab btn-fab-mini btn-raised btn-sm btn-success " data-toggle="modal" data-target="#infoModal"><i class="fa fa-question"></i></button>
		</div>
		<div class="row">
			@include('reportes2.partials._filters')

			<div class="col-sm-12">
				<a href="/reportes/reporte-general/@{{ inicio }}/@{{ final }}/@{{ estado_id }}/@{{ establecimiento_id }}" class="btn btn-primary">Realizar consulta</a>
			</div>
		</div>

		<div class="resultados">
			<h3>Reporte por rango mensual</h3>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>Fecha</th>
						<th>Totales</th>
					</tr>
				</thead>
				<tbody>
				@foreach($shipments as $item)
					<tr>
						<td>
							<a target="_blank" href="/reportes/reporte-general-listado-mes/{{ \Carbon\Carbon::parse($item->fecha)->year }}-{{ \Carbon\Carbon::parse($item->fecha)->month }}-1/{{ $estadoR }}">
								{{ \Carbon\Carbon::parse($item->fecha)->year }}-{{ \Carbon\Carbon::parse($item->fecha)->month }}
							</a>
						</td>
						<td>{{ $item->subtotal }}</td>
					</tr>
				@endforeach
				</tbody>
				<tfooter>
					<tr>
						<td><p class="text-left">Total a la fecha</p></td>
						<td>{{ $total }}</td>
					</tr>
				</tfooter>
			</table>
			{!! $shipments->render() !!}
		</div>

@stop

@section('modal')
	@include('reportes2.partials._modal-infoGeneral')
@stop

@section('post-script')
	<script src="{{ URL::asset("js/underscore.js") }}"></script>
	<script src="{{ URL::asset("js/moment.js") }}"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/1.4.5/numeral.min.js"></script>
	<script type="text/javascript" src="https://www.google.com/jsapi"></script>
	<script src="{{ URL::asset("js/vue-reporte-general.js") }}"></script>
@stop

