		<div>
			<div class="col-md-12" v-if="! rows.length">
				<h4>No hay resultados para esta busqueda.</h4>
			</div>

			<div class="col-md-12" v-if="rows.length">
				<h4>Hay <strong style="color: red">@{{ rows.length }}</strong> coincidencia(s)</h4>
			</div>
			<div class="col-md-12">
				<table class="table table-hover table-bordered table-striped">
					<thead>
					<th>No. Guía</th>
					<th>Remitente</th>
					<th>Destinatario</th>
					<th>Fecha de inicio</th>
					<th>Fecha de entrega</th>
					<th>Estado</th>
					<th>Tiempo de entrega</th>
					</thead>
					<tbody>
						<tr v-if="! rows.length">
							<td colspan="7">
								<div class="alert alert-info">
									<p class="text-center">@{{ message }}</p>
								</div>
							</td>
						</tr>
						<tr v-repeat="row: rows">
							<td class="smaller">@{{ row.code }}</td>
							<td class="smaller">
								<div>@{{ row.senders.name }}</div>
								@{{ row.senders.establecimiento.name }}
							</td>
							<td class="smaller">
								<div>@{{ row.recivers.name }}</div>
								@{{ row.recivers.establecimiento.name }}
							</td>
							<td class="smaller">@{{ row.created_at }}</td>
							<td class="smaller">@{{ row.updated_at }}</td>
							<td class="smaller">@{{ row.estados.name }}</td>
							<td class="smaller">Tiempos</td>
						</tr>
					</tbody>
					<tfooter v-if="rows.length">
						<tr>
							<td colspan="6">Total</td>
							<td>@{{ rows.length }}</td>
						</tr>
					</tfooter>
				</table>
			</div>
		</div>

