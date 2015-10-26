<h3>Reporte Diario</h3>

<table class="table table-bordered">
	<thead>
	<tr>
		<th>Fecha</th>
		<th>Totales</th>
	</tr>
	</thead>
	<tbody>
	@foreach($shipments as $item)
		<tr>
			<td><a href="">{{ $item->fecha }}</a></td>
			<td>{{ $item->subtotal }}</td>
		</tr>
	@endforeach
	</tbody>
	<tfooter>
		<tr>
			<td><p class="text-left">Total a la fecha</p></td>
			<td>{{ $total }}</td>
		</tr>
	</tfooter>
</table>
{!! $shipments->render() !!}