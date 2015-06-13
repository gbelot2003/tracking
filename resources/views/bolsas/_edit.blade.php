<div class="col-md-3">
	<!-- Code Form Input -->
	<div class="form-group">
		{!! Form::label('code', "Code:") !!}
		{!! Form::text("code", null, ['class' => 'form-control', 'readonly' => 'readonly']) !!}
	</div>
</div>
<div class="col-md-3">
	<!-- sender Form Input -->
	<div class="form-group">
		{!! Form::label('destino_id', "Destino :") !!}
		{!! Form::select('destino_id', $establecimientos, null, ['class' => 'select form-control']) !!}
	</div>
</div>

<hr>
<div id="listadosEdit">
	<table class="table table-hovered table-bordered">
		<theader>
			<th>No. Guia</th>
			<th>Destino</th>
			<th>Fecha</th>
			<th>Seleccionar</th>
		</theader>
		<tbody>
		</tbody>
	</table>
	<pre>@{{ $data | json }}</pre>
</div>