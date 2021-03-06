
<div class="row">

	<div class="col-md-12">
		<!-- Last_name Form Input -->
		<div class="form-group">
			{!! Form::label('name', "Nombre Completo:") !!}
			{!! Form::text("name", null, ['class' => 'form-control']) !!}
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

	<div class="col-md-4">
		<!-- secciones Form Input -->
		<div class="form-group">
			{!! Form::label('seccion', "Departamento o Sección:") !!}
			{!! Form::select('seccion_id', $secciones, null, ['class' => 'select form-control', 'id' => 'secciones-select']) !!}
			{!! Form::hidden('main_form', '1', ['id' => 'main_form']) !!}
		</div>
	</div>

	<div class="col-md-3">
		<!-- establecimiento Form Input -->
		<div class="form-group">
			{!! Form::label('establecimientos', "Estado del perfil") !!}
			{!! Form::select('userstatus_id', $estado, null, ['class' => 'select form-control', 'id' => 'status-select']) !!}
		</div>
	</div>



</div>
<div class="form-group">
	<button type="submit" class="btn btn-primary">{{ $submitButtonText }}</button>
	@if(Request::ajax())
	<a id="establecimiento" href="/establecimientos/create/" class="btn btn-material-purple">Crear Establecimiento</a>
	@endif
</div>