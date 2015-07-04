<table class="table table-bordered visible-print-block">
	<tr>
		<td colspan="3">Remitente</td>
		<td colspan="3">Destinatario</td>
	</tr>
	<tr>
		<td>Nombre</td>
		<td>Sección</td>
		<td>Sucursal/Edificio</td>
		<td>Nombre</td>
		<td>Sección</td>
		<td>Sucursal/Edificio</td>
	</tr>
	<tr>
		<td>{{ $paquete->senders->name }}</td>
		<td><span class="info-row"><span class="info-row">{{ $paquete->senders->seccion->name }}</span></span></td>
		<td>{{ $paquete->senders->establecimiento->name }}</td>
		<td><span class="info-row"><span class="info-row">{{ $paquete->recivers->seccion->name }}</span></span></td>
		<td>{{ $paquete->recivers->name }}</td>
		<td>{{ $paquete->recivers->establecimiento->name }}</td>
	</tr>
	<tr>
		<td>Departamento</td>
		<td colspan="2">Municipio</td>
		<td>Departamento</td>
		<td colspan="2">Municipio</td>
	</tr>
	<tr>
		<td>{{ $paquete->senders->establecimiento->departamento->departamento }}</td>
		<td colspan="2">{{ $paquete->senders->establecimiento->municipio->municipio }}</td>
		<td>{{ $paquete->recivers->establecimiento->departamento->departamento }}</td>
		<td colspan="2">{{ $paquete->recivers->establecimiento->municipio->municipio }}</td>
	</tr>
	<tr>
		<td colspan="3">Direccion</td>
		<td colspan="3">Direccion</td>
	</tr>
	<tr>
		<td colspan="3">{{ $paquete->senders->establecimiento->address }}</td>
		<td colspan="3">{{ $paquete->recivers->establecimiento->address }}</td>
	</tr>
</table>

<table class="table table-hover table-border visible-print-block">
	<caption>Estados de transito de esta encomienda</caption>
	<thead>
	<th>Estado</th>
	<th>Usuario</th>
	<th>Lugar</th>
	<th>Detalles</th>
	<th>Firma</th>
	<th>Foto</th>
	<th>Hora</th>
	</thead>
	<tbody>
	@foreach($paquete->transitos as $transito)
		<tr>
			<td>{{ $transito->estados->name }}</td>
			<td>{{ $transito->user->name }}</td>
			<td>{{ $transito->establecimiento->name }}</td>
			<td>{{ $transito->details }}</td>
			<td>
				@if(!$transito->firma)
					----
				@else
					<a id="firma" href="{{ asset('images/transitos/firmas/'. $transito->firma) }}">Firma</a>
				@endif
			</td>
			<td>
				@if(!$transito->foto)
					----
				@else
					<a id="foto" href="{{ asset('images/transitos/fotos/'. $transito->foto) }}">Foto</a>
				@endif
			</td>
			<td>{{ $transito->created_at }}</td>
		</tr>
	@endforeach
	</tbody>
</table>
