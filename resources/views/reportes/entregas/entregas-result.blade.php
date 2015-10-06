		<div>
			<div class="col-md-12">
				<div id="loader">
					<img src="{{ asset('images/loading.gif') }}" class="ajax-loader">
				</div>
				<div  class="hidden-print" v-if="! rows.length">
					<h4 smaller>No hay resultados para esta busqueda.</h4>
				</div>
				<div class="hidden-print" v-if="rows.length">
					<h4 smaller>Hay <strong style="color: red">@{{ rows.length }}</strong> coincidencia(s)</h4>
				</div>
				<table class="table table-hover table-bordered table-striped">
					<thead>
					<th>No. Guía</th>
					<th>Remitente</th>
					<th>Destinatario</th>
					<th>Fecha/inicio</th>
					<th v-if="entregados">Fecha/entrega</th>
					<th>Estado</th>
					<th v-if="entregados">Firma</th>
					<th>Detalles</th>
					<th v-if="entregados">Tiempo de entrega</th>
					</thead>
					<tbody>
						<tr v-if="! rows.length">
							<td colspan="9">
								<div class="alert alert-info">
									<p class="text-center">@{{ message }}</p>
								</div>
							</td>
						</tr>
						<tr v-repeat="row: rows">
							<td class="smaller">@{{ row.code }}</td>
							<td class="smaller">
								@{{ row.senders.name }}<br/>
								@{{ row.senders.establecimiento.name }}
							</td>
							<td class="smaller">
								@{{ row.recivers.name }}<br/>
								@{{ row.recivers.establecimiento.name }}
							</td>
							<td class="smaller">@{{ row.created_at }}</td>
							<td class="smaller" v-if="entregados">@{{ row.updated_at }}</td>
							<td class="smaller">@{{ row.estados.name }}</td>
							<td class="" v-if="entregados">
								<img width="70px" src="{{ URL::asset('images/transitos/firmas') }}/@{{ row.firma }} " alt=""/>
							</td>
							<td class="smaller">
								@{{ row.btransitos.details }}
							</td>
							<td class="smaller" v-if="entregados">@{{ row.differ }}</td>
						</tr>
					</tbody>
					<tfooter v-if="rows.length">
						<tr v-if="entregados">
							<td colspan="8" class="smaller">Total</td>
							<td class="smaller">@{{ rows.length }}</td>
						</tr>
						<tr v-if="!entregados">
							<td colspan="5" class="smaller">Total</td>
							<td class="smaller" >@{{ rows.length }}</td>
						</tr>
					</tfooter>
				</table>
			</div>
		</div>

