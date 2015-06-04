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
	@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor']))
	<div class="col-md-12">
		<div class="row">
			<div class="col-md-4">
				<!-- Rol Form Input -->
				<div class="form-group">
					<label for="roles_list">Rol de Usuario</label>
					{!! Form::select('roles_lists[]', $roles, null, ['class' => 'select form-control', 'id' => 'rol-select']) !!}
				</div>
			</div>
			<div class="col-md-3">
				<!-- Area géografica Form Input -->
				<div class="form-group">
					<label for="roles_list">Área Géografica</label>
					{!! Form::select('area_id', $area, null, ['class' => 'select form-control', 'id' => 'area-select']) !!}
				</div>
			</div>
			<div class="col-md-3">
				<!-- userstatus Form Input -->
				<div class="form-group">
					<label for="roles_list">Estado del Usuario</label>
					{!! Form::select('userstatus_id', $estado, null, ['class' => 'select form-control', 'id' => 'estado-select']) !!}
				</div>
			</div>
			<div class="col-md-2">
				<!-- Repassword Form Input -->
				<div class="form-group">
					<label for="empresa">Empresa que labora</label>
					{!! Form::select('empresa_id', $empresa, null, ['class' => 'select form-control', 'id' => 'estado-select']) !!}
				</div>
			</div>
		</div>
	</div>
		@if($barra == 1)
			<div class="col-md-12">
				<!-- sender Form Input -->
				<div class="form-group">
				<label for="roles_list">Perfiles relacionados</label>
				{!! Form::select('traders_list[]', $trader, null, ['class' => 'select form-control', 'id' => 'trader-select', 'multiple']) !!}

			</div>
		</div>
		@endif
	@endif
	<div class="form-group">
		<button type="submit" class="btn btn-primary">{{ $submitButtonText }}</button>
	</div>
</div>