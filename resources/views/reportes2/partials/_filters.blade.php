<div class="col-sm-12">
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
	<div class="col-md-4">
		<div class="">
			<label for="" class="">Estados</label>
			{!! Form::select('estado_id[]', $estadosList, $estados, ['class' => 'select form-control', 'id' => 'estado', 'v-estado' => 'estado_id', 'v-model' => 'estado_id', 'multiple']) !!}
		</div>
	</div>

	<div class="col-md-4">
		<div class="">
			<label for="" class="">Establecimientos</label>
			{!! Form::select('establecimiento_id', $establecimientoList, null, ['class' => 'select form-control', 'id' => "establecimientos", 'v-establecimiento' => 'establecimiento_id', 'v-model' => 'establecimiento_id']) !!}
		</div>
	</div>
</div>