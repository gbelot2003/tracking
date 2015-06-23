<div class="col-md-12">

	<div id="loader">
		<img src="{{ asset('images/loading.gif') }}" class="ajax-loader">
	</div>

	<table class="table table-hovered table-bordered">
		<thead>
		<tr>
			<th>No. Guía</th>
			<th>Remitente</th>
			<th>Destinatario</th>
			<th>Estado</th>
			<th>Detalles</th>
			<th v-if="entregados">firma</th>

		</tr>
		</thead>
		<tbody>
		<tr v-if="! rows.length">
			<td colspan="8">
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
			<td class="smaller">@{{ row.estados.name }}</td>
			<td>@{{ row.btransitos.details }}</td>
			<td v-if="entregados">
				<img width="70px" src="{{ URL::asset('images/transitos/firmas') }}/@{{ row.firma }} " alt=""/>
			</td>
		</tr>
		</tbody>
	</table>
</div>

