<table class="table table-hover table-border">
	<caption>Estados de transito de esta encomienda</caption>
	<thead>
	<th>Estado</th>
	<th>Usuario</th>
	<th>Detalles</th>
	<th>Hora</th>
	</thead>
	<tbody>
	@foreach($transitos as $transito)
		<tr>
			<td>{{ $transito->estados->name }}</td>
			<td>{{ $transito->user->name }}</td>
			<td>{{ $transito->details }}</td>
			<td>{{ $transito->created_at }}</td>
		</tr>
	@endforeach
	</tbody>
</table>
