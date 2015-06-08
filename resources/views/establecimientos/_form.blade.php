<div class="row">

	<div class="col-md-12">
		<!-- Name Form Input -->
		<div class="form-group">
			{!! Form::text("name", null, ['class' => 'form-control floating-label', 'placeholder' => 'Nombre']) !!}
		</div>
	</div>

	<div class="col-md-5 col-sm-12">
		<!-- Name Departamento Input -->
		<div class="form-group">
			{!! Form::label('departamentos', 'Departamento') !!}
			{!! Form::select("departamento_id", $departamentos, null ,['class' => 'select form-control', 'id' => 'dept-select']) !!}
		</div>
	</div>

	<div id="municipios" class="col-md-5 col-sm-12"></div>

	<div class="col-md-2 col-sm-12">
		<!-- Name Departamento Input -->
		<div class="form-group">
			{!! Form::label('empresa_id', 'Empresa') !!}
			{!! Form::select("empresa_id", $tipo, NULL ,['class' => 'select form-control', 'id' => 'tipo-select']) !!}
		</div>
	</div>


	<div class="col-md-12">
		<!-- Name Form Input -->
		<div class="form-group">
			{!! Form::textarea("address", null, ['class' => 'form-control floating-label', 'placeholder' => 'Dirección']) !!}
		</div>
	</div>

	<div class="col-md-12">
		<div class="form-group">
			<button type="submit" class="btn btn-primary">{{ $submitButtonText }}</button>
		</div>
	</div>
</div>