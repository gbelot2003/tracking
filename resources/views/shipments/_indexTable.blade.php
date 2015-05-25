<table id="table" class="table table-hover">
	<thead>
	<th>No.</th>
	<th>Remitente</th>
	<th>Destinatario</th>
	<th>Descripción</th>
	<th>Estado</th>
	</thead>
	<tbody>
	@foreach($paquetes as $paquete)
		<tr>
			<td>
				<a href="{{ action('ShipmentCotroller@show', $paquete->id) }}">{{ $paquete->code }}</a>
			</td>
			<td>
				<div class="col-md-12">
					<b>{{ $paquete->senders->establecimiento->name }}</b>,
				</div>
				<div class="col-md-12">
					<a href="{{ action('TraderController@show', $paquete->senders->id) }}">
						{{$paquete->senders->first_name}}, {{ $paquete->senders->last_name }}
					</a>
				</div>
				<div class="col-md-12">
					<b>{{ $paquete->senders->cargo->name }}</b>
				</div>
				<div class="col-md-12">
					<b>{{ $paquete->senders->seccion->name }}</b>
				</div>
			</td>
			<td>
				<div class="col-md-12">
					<b>{{ $paquete->recivers->establecimiento->name }}</b>,
				</div>
				<div class="col-md-12">
					<a href="{{ action('TraderController@show', $paquete->recivers->id) }}">
						{{ $paquete->recivers->first_name }}, {{ $paquete->recivers->last_name }}
					</a>
				</div>
				<div class="col-md-12">
					<b>{{ $paquete->recivers->cargo->name }}</b>
				</div>
				<div class="col-md-12">
					<b>{{ $paquete->recivers->seccion->name }}</b>
				</div>

			</td>
			<td>{{ $paquete->description }}</td>
			<td>
				@foreach($paquete->transitos->slice(0, 1) as $transito)
					{{ $transito->estados->name }}
				@endforeach
			</td>
		</tr>
	@endforeach
	</tbody>
</table>