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
<table class="table table-striped visible-print-block">
	<tr>
		<td>Descripción</td>
		<td>Estado</td>
		<td>Fecha</td>
		@if($paquete->firma)
			<td>Firma</td>
		@endif
	</tr>
	<tr>
		<td><p>{{ $paquete->description }}</p></td>
		<td>{{ $paquete->estados->name }}</td>
		<td>{{ $paquete->updated_at }}</td>
		@if($paquete->firma)
			<td>
				<img width="70px" src="{{ URL::asset('images/transitos/firmas') }}/{{ $paquete->firma }}" alt=""/>
			</td>
		@endif
	</tr>
</table>