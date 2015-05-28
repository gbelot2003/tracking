<div class="row">
	<div class="col-md-3">
		<h3>Transitos</h3>
	</div>
	<div class="col-md-2">
		{!! Form::open(['action' => ['TransitosController@store'], 'class' => 'form-inline']) !!}
		{!! Form::submit('Transito', ['class' => 'btn btn-primary']) !!}
		{!! Form::hidden('estado_id', 2) !!}
		{!! Form::hidden('shipment_id', $paquete->id) !!}
		{!! Form::hidden('details', "Todo Correcto") !!}
		{!! Form::close() !!}
	</div>
	<div class="col-md-3">
		<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('TransitosController@create', $paquete->id) }}">Transito observaciones</a>
	</div>

</div>

<table class="table table-hover table-border">
	<caption>Estados de transito de esta encomienda</caption>
	<thead>
	<th>Estado</th>
	<th>Usuario</th>
	<th>Detalles</th>
	<th>Hora</th>
	</thead>
	<tbody>
	@foreach($paquete->transitos as $transito)
		<tr>
			<td>{{ $transito->estados->name }}</td>
			<td>{{ $transito->user->name }}</td>
			<td>{{ $transito->details }}</td>
			<td>{{ $transito->created_at }}</td>
		</tr>
	@endforeach
	</tbody>
</table>