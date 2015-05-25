<table class="table">
	<thead>
	<th>No.</th>
	<th>Destinatario</th>
	<th>Fecha</th>
	<th>Estado</th>
	</thead>
	<tbody>
	@foreach($sender as $paquete)
		<tr>
			<td><b>{{ $paquete->id }}</b></td>
			<td>
				<div class="info-row">{{ $paquete->recivers->first_name }}, {{ $paquete->recivers->last_name }}</div>
				<div class="info-row"><span class="info-row">{{ $paquete->recivers->cargo->name }}</span></div>
				<div class="info-row"><span class="info-row">{{ $paquete->recivers->seccion->name }}</span></div>
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