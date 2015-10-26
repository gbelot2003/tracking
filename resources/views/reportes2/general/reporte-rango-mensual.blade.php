@extends('app')
@section('title', 'Consulta de movimientos por rango mensual')

@section('content')
	<div id="reportes">
		<div class="row">
			@include('reportes2.partials._filters')

			<div class="col-sm-12">

			</div>
		</div>
		<hr/>

		<div class="resultados">
			<div class="text-right hidden-sm hidden-xs">
				<a type="button" class="" data-toggle="modal" data-target="#infoModal"><i class="fa fa-question-circle"></i></a>
			</div>
			<h3>Reporte por rango mensual</h3>

			<table class="table table-bordered">
				<thead>
					<tr>
						<th>Fecha</th>
						<th><span class="rotate">En Espera</span></th>
						<th><span class="rotate">Regular</span></th>
						<th><span class="rotate">Centro de acopio</span></th>
						<th><span class="rotate">Bolsa</span></th>
						<th><span class="rotate">Daños ligeros</span></th>
						<th><span class="rotate">Daños Graves</span></th>
						<th><span class="rotate">Extraviado</span></th>
						<th><span class="rotate">Robado</span></th>
						<th><span class="rotate">Dañado Completo</span></th>
						<th><span class="rotate">Entregado</span></th>
						<th><span class="rotate">Entregado Observacio.</span></th>
						<th><span class="rotate">Entregado Terceros (continua)</span></th>
						<th><span class="rotate">Entregado Terceros (Final)</span></th>
						<th><strong>Totales</strong></th>
					</tr>
				</thead>
				<tbody>
				@foreach($shipments as $item)
					<tr>
						<td>{{ $item->mes  }}-{{ $item->year }}</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/1">
								{{ number_format($item->espera) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/2">
								{{ number_format($item->regular) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/3">
								{{ number_format($item->acopio) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/4">
								{{ number_format($item->transporte) }}
							</a>
						</td>
						<td>
							<a target="_blank"  href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/5">
								{{ number_format($item->dligero) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/6">
								{{ number_format($item->dgrave) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/8">
								{{ number_format($item->extrabiado) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/9">
								{{ number_format($item->robados) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/10">
								{{ number_format($item->danocompleto) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/11">
								{{ number_format($item->entregadocerrado) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/12">
								{{ number_format($item->entregadobs) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/7">
								{{ number_format($item->eterceroscontinua) }}
							</a>
						</td>
						<td>
							<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-1/13">
								{{ number_format($item->entregadocerradofinal) }}
							</a>
						</td>
						<td>
							<a target="_blank" target="_blank" href="/reportes/reporte-listado-mes/{{ \Carbon\Carbon::parse($item->fecha)->year }}-{{ \Carbon\Carbon::parse($item->fecha)->month }}-1">
								<strong>{{ number_format($item->subtotal) }}</strong>
							</a>
						</td>
					</tr>
				@endforeach
				</tbody>
				<tfooter>
					<tr>
						<td>Totales</td>
						<td><strong>{{ number_format($espera) }}</strong></td>
						<td><strong>{{ number_format($regular) }}</strong></td>
						<td><strong>{{ number_format($acopio) }}</strong></td>
						<td><strong>{{ number_format($transporte) }}</strong></td>
						<td><strong>{{ number_format($dligero) }}</strong></td>
						<td><strong>{{ number_format($dgrave) }}</strong></td>
						<td><strong>{{ number_format($extrabiado) }}</strong></td>
						<td><strong>{{ number_format($robados) }}</strong></td>
						<td><strong>{{ number_format($danocompleto) }}</strong></td>
						<td><strong>{{ number_format($entregadocerrado) }}</strong></td>
						<td><strong>{{ number_format($entregadobs) }}</strong></td>
						<td><strong>{{ number_format($eterceroscontinua) }}</strong></td>
						<td><strong>{{ number_format($entregadocerradofinal) }}</strong></td>
						<td><strong>{{ number_format($total) }}</strong></td>
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

