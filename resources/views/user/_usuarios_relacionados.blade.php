<div class="table-responsive">
	<table class="table">
		<thead>
		<th>Nombre :</th>
		<th>Email:</th>
		<th>Rol:</th>
		</thead>
		<tbody>
		<tr>
			<td>{{ $user->name }}</td>
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