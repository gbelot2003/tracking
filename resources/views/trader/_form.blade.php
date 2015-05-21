
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
	<div class="col-md-4">
		<!-- establecimiento Form Input -->
		<div class="form-group">
			{!! Form::select('$establecimiento_lists[]', $establecimiento, null, ['class' => 'select form-control', 'id' => 'establecimiento-select']) !!}
		</div>
	</div>

	<div class="col-md-4">
		<!-- secciones Form Input -->
		<div class="form-group">
			{!! Form::select('$secciones_lists[]', $secciones, null, ['class' => 'select form-control', 'id' => 'secciones-select']) !!}
		</div>
	</div>

	<div class="col-md-4">
		<!-- cargo Form Input -->
		<div class="form-group">
			{!! Form::select('$cargo_lists[]', $cargo, null, ['class' => 'select form-control', 'id' => 'cargo-select']) !!}
		</div>
	</div>

</div>
<div class="form-group">
	<button type="submit" class="btn btn-primary">{{ $submitButtonText }}</button>
</div>