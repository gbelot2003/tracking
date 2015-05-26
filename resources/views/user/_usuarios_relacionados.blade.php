<div class="table-responsive">
	<table class="table">
		<thead>
		<th>Apellido(s):</th>
		<th>Nombre(s):</th>
		<th>Email:</th>
		<th>Rol:</th>
		</thead>
		<tbody>
		<tr>
			<td>{{ $user->last_name }}</td>
			<td>{{ $user->first_name }}</td>
			<td>{{ $user->email }}</td>
			<td>
				@foreach($user->roles as $rol)
					{{ $rol->display_name }}
				@endforeach
			</td>
		</tr>
		</tbody>
	</table>
</div>