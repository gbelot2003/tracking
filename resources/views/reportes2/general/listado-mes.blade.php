@extends('app')

@section('title', 'Resultados por rango mensual')

@section('breadcrumbs')
	<ol class="breadcrumb hidden-print">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('reportes/reporte-rango-mensual/') }}">Consulta rango mensual</a></li>
		<li><a href="">Listado de reporte mensual</a></li>
	</ol>
@stop

@section('content')
	<table class="table table-bordered">
		<thead>
			<tr>
				<th>Días</th>
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
				<th>Subtotal</th>
			</tr>
		</thead>
		<tbody>
		@foreach($shipments as $item)
		<tr>
			<td>{{ $item->dia }}</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/1">
					{{ number_format($item->espera) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/2">
					{{ number_format($item->regular) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/3">
					{{ number_format($item->acopio) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/4">
					{{ number_format($item->transporte) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/5">
					{{ number_format($item->dligero) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/6">
					{{ number_format($item->dgrave) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/8">
					{{ number_format($item->extrabiado) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/9">
					{{ number_format($item->robados) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/10">
					{{ number_format($item->danocompleto) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/11">
					{{ number_format($item->entregadocerrado) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/12">
					{{ number_format($item->entregadobs) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/7">
					{{ number_format($item->eterceroscontinua) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-listado-mensual-por-estado/{{ $item->year }}-{{ $item->mes }}-{{ $item->dia }}/13">
					{{ number_format($item->entregadocerradofinal) }}
				</a>
			</td>
			<td>
				<a target="_blank" href="/reportes/reporte-general-listado-dia/{{ $item->year }}-{{$item->mes}}-{{ $item->dia }}">
					{{ $item->subtotal }}
				</a>
			</td>
		</tr>
		@endforeach
		</tbody>
		<tfooter>
			<tr>
				<td><strong>Total</strong></td>
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
@stop