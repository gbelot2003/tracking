<div id="listados" class="list-group">
	<div class="row">
		<div class="col-md-4">
			<!-- Code Form Input -->
			<div class="form-group">
				{!! Form::label('code', "No Guia de Bolsa:") !!}
				{!! Form::text("code", null, ['class' => 'form-control']) !!}
			</div>
		</div>
		<div class="col-md-2">
			<button id="generate" class="btn btn btn btn-material-indigo">Generar</button>
		</div>
		<div class="col-md-6">
			<!-- sender Form Input -->
			<div class="form-group">
				{!! Form::label('destino_id', "Destino(Bolsa) :") !!}
				{!! Form::select('destino_id', $establecimientos, null, ['class' => 'select form-control', 'id' => 'sender-select']) !!}
			</div>
		</div>

		<div class="col-md-12">
			<hr />
			<div class="row">
				<div class="col-md-6">
					<div class="form-group has-error">
						<label for="">No Guia de Encomiendas</label>
						<input type="number"  class="form-control floating-label"  placeholder="No de Guia de encomiendas"  v-model="codes"/>
					</div>
				</div>
				<div class="col-md-6">
					<button class="btn btn-info" v-on="click: fetchShipments($event)">&#10004;</button>
				</div>
			</div>
			<hr />
		</div>

		<div class="col-md-12">
			<table id="bolsas" class="table table-hovered table-bordered">
				<theader>
					<th>No. Guia</th>
					<th>Remitente</th>
					<th>Destinatario</th>
					<th>Fecha</th>
					<th>Agregar</th>
				</theader>
				<tbody>
				<tr v-repeat="item: items">
					<td>
						@{{ item.code }}
						<input name="shipment_id[]" type="hidden" value="@{{ item.id }}"/>
					</td>
					<td>
						<div class="col-md-12">
							@{{ item.senders.name }}
						</div>
						<hr/>
						<div class="col-md-12">
							@{{ item.senders.establecimiento.name }}
						</div>
					</td>
					<td>
						<div class="col-md-12">
							@{{ item.recivers.name }}
						</div>
						<hr/>
						<div class="col-md-12">
							@{{ item.recivers.establecimiento.name }}
						</div>
					</td>
					<td>@{{ created_at }}</td>
					<td><button v-on="click: removeItem(item)">&#10007;</button></td>
				</tr>
				</tbody>
			</table>
			<div class="form-group">
				{!! Form::submit('Salvar', ['class' => 'btn btn-primary']) !!}
			</div>
		</div>
	</div>
</div>
<style>
	#input h2 {
		padding: 14px;
		font-size: 16px;
		font-weight: 400;
	}
	#input .inputs {
		width: 80%;
	}
	#input .form-control-wrapper {
		margin: 30px 0;
	}
</style>
