<!-- Name Departamento Input -->
<div class="form-group">
	{!! Form::label('municipios', 'Municipios') !!}
	{!! Form::select("municipio_id", $municipios, null ,['class' => 'select form-control', 'id' => 'munic-select']) !!}
</div>