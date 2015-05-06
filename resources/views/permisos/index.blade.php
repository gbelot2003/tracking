@extends('app')
@section('title', 'Control de Permisos')
@section('content')

	<table class="table table-hover table-bordered">
		<thead>
		<th>Nombre</th>
		<th>Descripción</th>
		<th>Roles</th>
		</thead>
		<tbody>
		@foreach($perms as $perm)
			<tr>
				<td><a href="{{ action('PermissionsController@show', $perm->id) }}">{{ $perm->display_name }}</a></td>
				<td>{{ $perm->description }}</td>
				<td>
					<ul class="list-inline">
						@foreach($perm->roles as $rol)
							<li>{{ $rol->name }}</li>
						@endforeach
					</ul>
				</td>
			</tr>
		@endforeach
		</tbody>
	</table>
@stop