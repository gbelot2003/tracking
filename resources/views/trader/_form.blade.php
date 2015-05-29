
<div class="row">

	<div class="col-md-6">
		<!-- Last_name Form Input -->
		<div class="form-group">
			{!! Form::label('last_name', "Apellidos:") !!}
			{!! Form::text("last_name", null, ['class' => 'form-control']) !!}
		</div>
	</div>

	<div class="col-md-6">
		<!-- First_name Form Input -->
		<div class="form-group">
			{!! Form::label('first_name', "Nombres:") !!}
			{!! Form::text("first_name", null, ['class' => 'form-control']) !!}
		</div>
	</div>

</div>

<div class="row">
	<div class="col-md-5">
		<!-- establecimiento Form Input -->
		<div class="form-group">
			{!! Form::label('establecimientos', "Agencia o Edificio de trabajo:") !!}
			{!! Form::select('establecimiento_id', $establecimiento, null, ['class' => 'select form-control', 'id' => 'establecimiento-select']) !!}
		</div>
	</div>

	<div class="col-md-7">
		<!-- secciones Form Input -->
		<div class="form-group">
			{!! Form::label('seccion', "Departamento o Sección:") !!}
			{!! Form::select('seccion_id', $secciones, null, ['class' => 'select form-control', 'id' => 'secciones-select']) !!}
		</div>
	</div>

</div>
<div class="form-group">
	<button type="submit" class="btn btn-primary">{{ $submitButtonText }}</button>
</div>