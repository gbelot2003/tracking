<div class="row">
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
			{!! Form::select('destino_id', $establecimientos, $bolsa->establecimiento_recive_id, ['class' => 'select form-control']) !!}
		</div>
	</div>
	<div class="col-md-2">
		<div><label>Fecha: </label></div>
		{{ $bolsa->created_at }}
	</div>
</div>
<hr>
<div id="listadosEdit">
	<input type="hidden" v-model="url" value="{{ $bolsa->id }}"/>
	<table class="table table-hovered table-bordered">
		<theader>
			<th>No. Guia</th>
			<th>Destino</th>
			<th>Fecha</th>
			<th>Seleccionar</th>
		</theader>
		<tbody>
		<tr v-repeat="item: items">
			<td>@{{ item.code  }}</td>
			<td>@{{ item.recivers.establecimiento.name }}<input type="hidden" name="destinos" value="@{{ item.establecimientoid }}" /></td>
			<td>@{{ item.created_at  }}</td>
			<td>
				<button v-on="click: addItem(item)">&#10004;</button>
			</td>
		</tr>
		</tbody>
	</table>
	<pre>@{{ $data | json }}</pre>
</div>