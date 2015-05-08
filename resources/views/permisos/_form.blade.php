<div class="row">
	<div class="col-md-6 col-sm-12">
		<!-- Name Form Input -->
		<div class="form-group">
			{!! Form::text("name", null, ['class' => 'form-control floating-label', 'placeholder' => 'Nombre']) !!}
		</div>
	</div>

	<div class="col-md-6 col-sm-12">
		<!-- Name Form Input -->
		<div class="form-group">
			{!! Form::text("display_name", null, ['class' => 'form-control floating-label', 'placeholder' => 'Nombre legible para humanos']) !!}
		</div>
	</div>
	<div class="col-md-12">
		<!-- Name Form Input -->
		<div class="form-group">
			{!! Form::text("description", null, ['class' => 'form-control floating-label', 'placeholder' => 'Descripción del permiso']) !!}
			<span class="text-red small">Todos los campos aceptan 255 caracteres</span>
		</div>
	</div>

	<div class="form-group">
		<button type="submit" class="btn btn-primary">{{ $submitButtonText }}</button>
	</div>

</div>