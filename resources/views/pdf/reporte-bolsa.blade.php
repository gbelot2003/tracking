@extends('pdf')
@section('content')
<h2>Titulo de pagina</h2>
	<div class="row">
		<div class="col-md-3">
			<!-- Code Form Input -->
			<div class="form-group">
				<h3>{{ $bolsas->code }}</h3>
			</div>
		</div>
		<div class="col-md-3">
			<!-- sender Form Input -->
			<div class="form-group">
				{!! Form::label('destino_id', "Destino :") !!}
				{!! Form::select('destino_id', $establecimientos, $bolsas->establecimiento_recive_id, ['class' => 'select form-control']) !!}
			</div>
		</div>
		<div class="col-md-2">
			<div><label>Fecha: </label></div>
			{{ $bolsas->created_at }}
		</div>
	</div>

	<input type="hidden" v-model="url" value="{{ $bolsas->code }}"/>
	<table class="table table-hovered table-bordered">
		<theader>
			<th>No. Guia</th>
			<th>Remitente</th>
			<th>Destinatario</th>
			<th>Fecha</th>
		</theader>
		<tbody>
		@foreach($bolsas->shipments as $shipments)
			<tr>
				<td>
					{{ $shipments->code }}
					<input name="shipment_id[]" type="hidden" value="{{ $shipments->id }}"/>
				</td>
				<td>
					<div class="col-md-12">
						{{ $shipments->senders->name }}
					</div>
					<hr/>
					<div class="col-md-12">
						{{ $shipments->senders->establecimiento->name }}
					</div>
				</td>
				<td>
					<div class="col-md-12">
						{{ $shipments->recivers->name }}
					</div>
					<hr/>
					<div class="col-md-12">
						{{ $shipments->recivers->establecimiento->name }}
					</div>
				</td>
				<td>{{ $shipments->created_at }}</td>
			</tr>
		@endforeach
		</tbody>
	</table>
@stop