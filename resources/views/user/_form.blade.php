<div class="row">
	<div class="col-md-6 col-sm-12">
		<!-- Name Form Input -->
		<div class="form-group">
			{!! Form::text("name", null, ['class' => 'form-control floating-label', 'placeholder' => 'Nombre']) !!}
		</div>
	</div>
	<div class="col-md-6 col-sm-12">
		<!-- email Form Input -->
		<div class="form-group">
			{!! Form::text("email", null, ['class' => 'form-control floating-label', 'placeholder' => 'E-Mail']) !!}
		</div>
	</div>
	<div class="col-md-6 col-sm-12">
		<!-- Password Form Input -->
		<div class="form-group">
			{!! Form::password("password", ['class' => 'form-control floating-label', 'placeholder' => 'Password']) !!}
		</div>
	</div>
	<div class="col-md-6 col-sm-12">
		<!-- Repassword Form Input -->
		<div class="form-group">
			{!! Form::password("password_confirmation", ['class' => 'form-control floating-label', 'placeholder' => 'Re-password']) !!}
		</div>
	</div>

	<div class="col-md-12">
		<!-- Repassword Form Input -->
		<div class="form-group">
			{!! Form::select('roles_lists[]', $roles, null, ['class' => 'select form-control', 'id' => 'rol-select']) !!}
		</div>
	</div>
	<div class="form-group">
		<button type="submit" class="btn btn-primary">{{ $submitButtonText }}</button>
	</div>
</div>