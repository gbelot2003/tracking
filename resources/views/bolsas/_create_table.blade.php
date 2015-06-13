<div v-if="noCompleted.length">
	<div class="row">
		<div class="col-md-2">
			<!-- Departametos Form Input -->
			<label for="">Elija un Departamentos</label>
			<select name="departamentos"  v-model="departamentos" v-on="click: fetchMunicipios(departamentos)">
				@foreach($departamentos as $item)
					<option value="{{ $item->id }}">{{ $item->departamento }}</option>
				@endforeach
			</select>
		</div>

		<div class="col-md-2">
			<!-- Departametos Form Input -->
			<label for="">Elija un Municipio</label>
			<select name="municipios" v-model="municipio" v-on="click: fetchEstablecimientos(municipio)">
				<option v-repeat="municipios" value="@{{ id }}">@{{ municipio }}</option>
			</select>
		</div>

		<div class="col-md-4">
			<!-- establecimiento Form Input -->
			<label for="">Elija un establecimiento</label>
			<select name="establecimientos"  v-model="selected">
				<option v-repeat="establecimientos" value="@{{ id }}">@{{ name }}</option>
			</select>

		</div>
	</div>

	<hr>
	<table class="table table-hovered table-bordered">
		<theader>
			<th><a href="#" v-on="click: sortBy('code')">No. Guia</a></th>
			<th><a href="#"  v-on="click: sortBy('name')">Destino</a></th>
			<th><a href="#"  v-on="click: sortBy('created_at')">Fecha</a></th>
			<th>Seleccionar</th>
		</theader>
		<tbody>
		<tr v-repeat="
				item: items |
				noProcess |
				orderBy sortKey reverse |
				filterBy selected in 'recivers.establecimiento_id' number |
				filterBy departamentos in 'establecimientosdep' |
				filterBy municipio in 'establecimientosmun'

		">
			<td>@{{ item.code  }}</td>
			<td>@{{ item.recivers.establecimiento.name  }}<input type="hidden" name="destinos" value="@{{ item.recivers.establecimiento_id }}" /></td>
			<td>@{{ item.created_at  }}</td>
			<td>
				<button v-on="click: addItem(item)">&#10004;</button>
			</td>
		</tr>
		</tbody>
		<tfooter>
			<tr>
				<td colspan="3"></td>
				<td><button v-on="click: completeAll(items)">Seleccionar todas</button></td>
			</tr>
		</tfooter>
	</table>
</div>
