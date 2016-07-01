@extends('pdf')
@section('content')
	<div class="col-md-12 hidden-print">
		<div class="btn-group">
			<a class="btn btn-info" href="{{ action('BolsasController@edit', $bolsas->id) }}">Regresar</a>
		</div>
		<div class="btn-group">
			<a class="btn" onclick="window.print();return false;">Imprimir</a>
		</div>
	</div>
	<div class="col-md-12 ">
		<h2>Bolsa No {{ $bolsas->code }}</h2>
		<table class="visible-print-block">
			<tr>
				<td>
					<div class="visible-print-block">
						{!! \DNS2D::getBarcodeSVG($bolsas->code, "QRCODE",4,4); !!}
					</div>
				</td>
				<td>
					&#160;
				</td>
				<td>
					<div class="visible-print-block">
						{!! \DNS1D::getBarcodeSVG($bolsas->code, "C39",1,70); !!}
					</div>
				</td>
			</tr>
		</table>

		<table class="table table-bordered visible-print-block">
			<tr>
				<td>Remitente</td>
				<td>Destino</td>
				<td>Fecha de entrega</td>
				@if($bolsas->firma)
				<td>Firma</td>
				@endif
			</tr>
			<tr>
				<td>{{ $remitente }}</td>
				<td>{{ $establecimientos }}</td>
				<td>{{ $bolsas->updated_at }}</td>
				@if($bolsas->firma)
				<td><img width="70px" src="{{ URL::asset('images/transitos/firmas') }}/{{ $bolsas->firma }}" alt=""/></td>
				@endif
			</tr>
			<tr><td colspan="4">Detalles</td></tr>
			<tr><td colspan="4">{{ $bolsas->details }}</td></tr>
		</table>


		<div class="row hidden-print">
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
				<td>Descripción</td>
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
					<td>{{ $shipments->description }}</td>
				</tr>
			@endforeach
		</table>
	</div>
@stop
