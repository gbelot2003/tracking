@extends('pdf')
@section('content')
	<div class="col-md-12 hidden-print">
		<div class="btn-group">
			<a class="btn" onclick="window.print();return false;">Imprimir</a>
			<a class="btn btn-info" href="{{ action('BolsasController@edit', $bolsas->id) }}">Regresar</a>
		</div>
	</div>
	<div class="col-md-12 ">
		<h2>Bolsa No {{ $bolsas->code }}</h2>

		<div class="visible-print-block">
			{!! \DNS2D::getBarcodeSVG("4445645656", "QRCODE",4,4); !!}
		</div>
		<div class="row">
			<div class="col-md-3">
				<!-- sender Form Input -->
				<div class="form-group">
					<span><strong>Remitente</strong></span> |
					{{ $remitente }}
				</div>
			</div>
			<div class="col-md-3">
				<!-- sender Form Input -->
				<div class="form-group">
					<span><strong>Destino</strong></span> |
					{{ $establecimientos }}
				</div>
			</div>
			<div class="col-md-2">
				<div><label>Fecha: </label></div>
				{{ $bolsas->created_at }}
			</div>
		</div>
		<hr/>
	</div>
	<div class="col-md-12">
		<table class="table table-hovered table-bordered">
			<tr>
				<td>No. Guia</td>
				<td>Remitente</td>
				<td>Destinatario</td>
				<td>Fecha</td>
			</tr>
			@foreach($bolsas->shipments as $shipments)
				<tr style="page-break-inside: avoid;">
					<td>
						{{ $shipments->code }}
					</td>

					<td>
						<span style="display: block">{{ $shipments->senders->name }}</span>
						<strong>{{ $shipments->senders->establecimiento->name }}</strong>
					</td>

					<td>
						<span style="display: block">{{ $shipments->recivers->name }}</span>
						<strong>{{ $shipments->recivers->establecimiento->name }}</strong>
					</td>

					<td><b>{{ $shipments->created_at }}</b></td>
				</tr>
			@endforeach
		</table>
	</div>
@stop