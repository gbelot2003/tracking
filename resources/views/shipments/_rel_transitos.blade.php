@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor', 'centro-acopio', 'currier']))
<div class="row">
	<div class="col-md-3">
		<h3>Estados</h3>
	</div>
	@if($paquete->estado == 1)
		<div class="col-md-2">
			{!! Form::open(['action' => ['TransitosController@store'], 'class' => 'form-inline', 'data-ask-submit']) !!}
			{!! Form::submit('Transito', ['class' => 'btn btn-primary']) !!}
			@if(Auth::user()->hasRole(['centro-acopio']))
				{!! Form::hidden('estado_id', 3) !!}
			@else
				{!! Form::hidden('estado_id', 2) !!}
			@endif
			{!! Form::hidden('shipment_id', $paquete->id) !!}
			{!! Form::hidden('details', "Todo Correcto") !!}
			{!! Form::close() !!}
		</div>
		<div class="col-md-3">
			<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('TransitosController@create', $paquete->id) }}">Transito observaciones</a>
		</div>
	@endif
</div>
@endif

<table class="table table-hover table-border">
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
