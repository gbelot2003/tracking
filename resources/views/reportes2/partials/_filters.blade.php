<div class="col-sm-12">
	<a href="/reportes/reporte-rango-mensual/@{{ inicio }}/@{{ final }}/@{{ establecimiento_id }}" class="btn btn-primary">Realizar consulta</a>

	<div class="col-md-2">
		<div class="form-group">
			<label class="inicio" for="">Inicio</label>
			<select name="inicio" id="inicio" v-model="inicio">
				@foreach($dates as $item)
				<option value="{{ $item->year }}-{{ $item->mes  }}-1">{{ $item->year }}-{{ $item->mes  }}</option>
				@endforeach
			</select>
		</div>
	</div>

	<div class="col-md-2">
		<div class="form-group">
			<label class="final" for="">Final</label>
			<select name="final" id="final" v-model="final">
				@foreach($dates as $item)
					<option value="{{ $item->year }}-{{ $item->mes  }}-1">{{ $item->year }}-{{ $item->mes  }}</option>
				@endforeach
			</select>
		</div>
	</div>
</div>