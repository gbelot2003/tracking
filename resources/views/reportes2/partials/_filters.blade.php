<div class="col-sm-12">
	<a href="/reportes/reporte-rango-mensual/@{{ inicio }}/@{{ final }}/@{{ establecimiento_id }}" class="btn btn-primary">Realizar consulta</a>

	<div class="col-md-2">
		<div class="form-group">
			<label class="" for="">Fecha de inicio</label>
			{!! Form::input('date', 'created_at', $date_init, ['class' => 'fecha', 'max' => date('Y-m-d'), 'v-model' => 'inicio']) !!}
		</div>
	</div>

	<div class="col-md-2">
		<div class="form-group">
			<label class="" for="">Fecha final</label>
			{!! Form::input('date', 'created_at', $date_finale, ['class' => 'fecha', 'max' => date('Y-m-d'), 'v-model' => 'final']) !!}
		</div>
	</div>
</div>