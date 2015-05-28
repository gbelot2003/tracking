<div class="panel panel-primary">
	<div class="panel-heading">
		<h3 class="panel-title">Destinatario</h3>
	</div>
	<div class="panel-body">
		<table class="table table-bordered">
			<thead>
			<th>Nombre</th>
			<th>Sección</th>
			<th>Sucursal/Edificio</th>
			</thead>
			<tbody>
			<tr>
				<td><span class="info-row">{{ $paquete->recivers->first_name }} {{ $paquete->senders->last_name }}</span></td>
				<td><span class="info-row"><span class="info-row">{{ $paquete->recivers->seccion->name }}</span></span></td>
				<td>{{ $paquete->recivers->establecimiento->name }}</td>
			</tr>
			<tr>
				<th>Departamento</th>
				<th colspan="2">Municipio</th>
			</tr>
			<tr>
				<td>{{ $paquete->recivers->establecimiento->departamento->departamento }}</td>
				<td colspan="2">{{ $paquete->recivers->establecimiento->municipio->municipio }}</td>
			</tr>
			<tr>
				<th colspan="3">Dirección</th>
			</tr>
			<tr>
				<td colspan="3">{{ $paquete->recivers->establecimiento->address }}</td>
			</tr>
			</tbody>
		</table>
	</div>
</div>