<table class="table">
	<thead>
	<th>No.</th>
	<th>Remitente</th>
	<th>Fecha</th>
	<th>Estado</th>
	</thead>
	<tbody>
	@foreach($reciber as $paquete)
		<tr>
			<td><a href="{{ action('ShipmentCotroller@show', $paquete->id) }}"><b>{{ $paquete->code }}</b></a></td>
			<td>
				<div class="info-row">{{ $paquete->senders->name }}</div>
				<div class="info-row"><span class="info-row">{{ $paquete->senders->seccion->name }}</span></div>
			</td>
			<td>{{ $paquete->created_at }}</td>
			<td>
				@foreach($paquete->transitos->slice(0, 1) as $transito)
					{{ $transito->estados->name }}
				@endforeach
			</td>
		</tr>
	@endforeach
	</tbody>
</table>