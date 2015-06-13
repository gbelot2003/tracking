<div class="row" v-if="noCompleted.length">


	<div class="col-md-4">
		<!-- establecimiento Form Input -->
		<label for="">Elija un establecimiento</label>
		<select name="establecimientos"  v-model="selected">
			@foreach($selectEsta as $item)
				<option value="{{ $item->id }}">{{ $item->name }}</option>
			@endforeach
		</select>

	</div>
</div>

<hr>
<table class="table table-hovered table-bordered">
	<theader>
		<th><a href="#" v-on="click: sortBy('code')">No. Guia</a></th>
		<th><a href="#"  v-on="click: sortBy('name')">Destino</a></th>
		<th>Fecha</th>
		<th>Seleccionar</th>
	</theader>
	<tbody>
	<tr v-repeat="item: items | noProcess | orderBy sortKey reverse | filterBy selected in 'establecimientoid'">
		<td>@{{ item.code  }}</td>
		<td>@{{ item.name  }}<input type="hidden" name="destinos" value="@{{ item.establecimientoid }}" /></td>
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
<pre>@{{ $data | json }}</pre>
