<div class="col-md-12">

	<div id="loader">
		<img src="{{ asset('images/loading.gif') }}" class="ajax-loader">
	</div>

	<table class="table table-hovered table-bordered">
		<thead>
		<tr>
			<th>No. Guía</th>
			<th>Estado</th>
			<th>Detalles</th>
		</tr>
		</thead>
		<tbody>
		<tr v-repeat="row: rows">
			<td>@{{ row.code }}</td>
			<td>@{{ row.estados.name }}</td>
			<td>@{{ row.description }}</td>
		</tr>
		</tbody>
	</table>
</div>

