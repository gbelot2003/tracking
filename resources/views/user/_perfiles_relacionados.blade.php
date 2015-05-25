<div class="table-responsive">
	<caption>Listado de perfiles relacionados para uso de encomiendas</caption>
	<table class="table">
		<thead>
		<th>Nombre: </th>
		<th>Apellido: </th>
		<th>Detalles</th>
		</thead>
		<tbody>
		@foreach($user->traders as $traders)
			<tr>
				<td>{{ $traders->first_name }}</td>
				<td>{{ $traders->last_name }}</td>
				<td><a href="{{ action('TraderController@show', $traders->id) }}">Ver detalles</a></td>
			</tr>
		@endforeach
		</tbody>
	</table>
</div>