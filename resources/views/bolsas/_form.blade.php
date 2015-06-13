<div class="row"  v-if="completions.length">
	<div class="col-md-3">
		<!-- Code Form Input -->
		<div class="form-group">
			{!! Form::label('code', "Code:") !!}
			{!! Form::text("code", null, ['class' => 'form-control']) !!}
		</div>
	</div>
	<div class="col-md-3">
		<!-- sender Form Input -->
		<div class="form-group">
			{!! Form::label('destino_id', "Destino :") !!}
			{!! Form::select('destino_id', $establecimientos, null, ['class' => 'select form-control', 'id' => 'sender-select']) !!}
		</div>
	</div>

	<table class="table table-hovered table-bordered">
		<theader>
			<th>No. Guia</th>
			<th>Destino</th>
			<th>Fecha</th>
			<th>Seleccionar</th>
		</theader>
		<tbody>
		<tr  v-repeat="item: items | itemsProcess | orderBy 'name' " >
			<td>
				@{{ item.code  }}
				<input type="hidden" name="shipment_id[]" value="@{{ item.id  }}"/>
			</td>
			<td>@{{ item.name  }}</td>
			<td>@{{ item.created_at  }}</td>
			<td>
				<button type="button" v-on="click: toggleItemCompletion(item)">&#10007;</button>

			</td>
		</tr>
		</tbody>
	</table>
	<div class="form-group">
		{!! Form::submit('Salvar', ['class' => 'btn btn-primary']) !!}
	</div>
</div>

