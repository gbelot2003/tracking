<div class="col-md-12 ">
	<b>Nombre Completo</b>
	<div class="warp">
		<div class="row">
			<div class="col-md-12">
				<h4 class="text-danger">{{ $trader->last_name }}, {{ $trader->first_name }}</h4>
			</div>
		</div>
	</div>
</div>

<hr/>
<div class="col-md-12 ">
	<table class="table">
		<thead>
		<th>Edificio/Sucursal</th>
		<th>Sección/Departamento</th>
		<th>Cargo</th>
		</thead>
		<tbody>
		<tr>
			<td><h4>{{ $trader->establecimiento->name }}</h4></td>
			<td><h4>{{ $trader->seccion->name }}</h4></td>
			<td><h4>{{ $trader->cargo->name }}</h4></td>
		</tr>
		</tbody>
	</table>
</div>