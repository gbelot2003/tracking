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
			{!! Form::text("description", null, ['class' => 'form-control floating-label', 'placeholder' => 'Descripción del rol']) !!}
			<span class="text-red small">Todos los campos aceptan 255 caracteres</span>
		</div>
	</div>
	@if(isset($users))
	<div class="col-md-12">
		<div class="row">
			<div class="col-md-6">
				<h4>Usurarios relacionados a este rol</h4>
				<table class="table table-striped table-hover ">
					<thead>
						<th>Nombre</th>
						<th>Email</th>
					</thead>
					<tbody>
					@foreach($users as $user)
						<tr>
							<td><a href="{{ action('UserController@edit', $user->id) }}">{{ $user->name }}</a></td>
							<td>{{ $user->email }}</td>
						</tr>
					@endforeach
					</tbody>
				</table>
			</div>

			<div class="col-md-6">
				<div class="form-group">
					{!! Form::label('Permissions', 'Permisos para Rol') !!}
					{!! Form::select('perms_lists[]', $perms, null, ['class' => 'select form-control', 'id' => 'perm-select', 'multiple']) !!}
				</div>
			</div>
		</div>
	@endif
		<div class="form-group">
			<button type="submit" class="btn btn-primary">{{ $submitButtonText }}</button>
		</div>
	</div>

</div>