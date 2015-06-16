<div id="listadosEdit">
	<div class="row">
		<div class="col-md-8"></div>
		<div class="col-md-4">
			<a id="virtual-form" class="btn btn-primary " href="">Transito</a>
			<a id="virtual-form" class="btn btn-primary " href="{{ url('bolsas/transitos/create/'. $bolsas->id ) }}">Transito</a>
		</div>
	</div>
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
				{!! Form::select('destino_id', $establecimientos, $bolsas->establecimiento_recive_id, ['class' => 'select form-control']) !!}
			</div>
		</div>
		<div class="col-md-2">
			<div><label>Fecha: </label></div>
			{{ $bolsas->created_at }}
		</div>
	</div>

	<div class="col-md-12">
		<hr />
		<div class="row">
			<div class="col-md-6">
				<div class="form-group has-error">
					<label for="">No Guia de Encomiendas</label>
					<input type="number"  class="form-control floating-label"  placeholder="No de Guia de encomiendas"  v-model="codes"/>
					<input type="hidden" value="{{ $bolsas->id }}" v-model="url"/>
					<div id="removed-items"></div>
				</div>
			</div>
			<div class="col-md-6">
				<button class="btn btn-info" v-on="click: fetchShipments($event)">&#10004;</button>
			</div>
		</div>
		<hr />
	</div>


		<input type="hidden" v-model="url" value="{{ $bolsas->code }}"/>
		<table class="table table-hovered table-bordered">
			<theader>
				<th>No. Guia</th>
				<th>Remitente</th>
				<th>Destinatario</th>
				<th>Fecha</th>
				<th>Agregar</th>
			</theader>
			<tbody>
			@foreach($bolsas->shipments as $shipments)
			<tr>
				<td>
					{{ $shipments->code }}
					<input name="shipment_id[]" type="hidden" value="{{ $shipments->id }}"/>
				</td>
				<td>
					<div class="col-md-12">
						{{ $shipments->senders->name }}
					</div>
					<hr/>
					<div class="col-md-12">
						{{ $shipments->senders->establecimiento->name }}
					</div>
				</td>
				<td>
					<div class="col-md-12">
						{{ $shipments->recivers->name }}
					</div>
					<hr/>
					<div class="col-md-12">
						{{ $shipments->recivers->establecimiento->name }}
					</div>
				</td>
				<td>{{ $shipments->created_at }}</td>
				<td class="remove"><button class="removeItem" href="{{ $shipments->id }}">&#10007;</button></td>
			</tr>
			@endforeach
			<tr v-repeat="nitem: nitems">
				<td>
					@{{ nitem.code }}
					<input name="shipment_id[]" type="hidden" value="@{{ nitem.id }}"/>
					<input name="addtransito_id[]" type="hidden" value="@{{ nitem.id }}"/>
				</td>
				<td>
					<div class="col-md-12">
						@{{ nitem.senders.name }}
					</div>
					<hr/>
					<div class="col-md-12">
						@{{ nitem.senders.establecimiento.name }}
					</div>
				</td>
				<td>
					<div class="col-md-12">
						@{{ nitem.recivers.name }}
					</div>
					<hr/>
					<div class="col-md-12">
						@{{ nitem.recivers.establecimiento.name }}
					</div>
				</td>
				<td>@{{ nitem.created_at }}</td>
				<td><button v-on="click: removenitems(nitem)">&#10007;</button></td>
			</tr>
			</tbody>
		</table>
	<div class="form-group">
		{!! Form::submit('Guardar', ['class' => 'btn btn-primary']) !!}
	</div>
</div>