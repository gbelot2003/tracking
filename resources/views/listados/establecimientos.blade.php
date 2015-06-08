<!-- Area Establecimiento de trabajo Form Input -->
<div class="form-group">
	<label for="roles_list">Establecimiento Asignado</label>
	{!! Form::select('establecimiento_id', $listado, null, ['class' => 'select form-control', 'id' => 'establecimiento-select']) !!}
</div>