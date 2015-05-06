@extends('app')
@section('title', 'Control de Roles')
@section('content')
<table class="table table-hover table-bordered">
	<thead>
		<th>Nombre</th>
		<th>Descripción</th>
		<th>Usuarios relacionados</th>
		<th>Permisos relacionados</th>
	</thead>
	<tbody>
		@foreach($roles as $rol)
			<tr>
				<td><a href="{{ action('RolesController@show', $rol->id) }}">{{ $rol->display_name }}</a></td>
				<td>{{ $rol->description }}</td>
				<td>
					<ul class="list-inline">
						@foreach($rol->users as $user)
							<li><a href="">{{ $user->name }}</a></li>
						@endforeach
					</ul>
				</td>
				<td>
					<ul class="list-inline">
						@foreach($rol->perms as $perms)
							<li><a href="{{ action('PermissionsController@show', $perms->id) }}">{{ $perms->display_name }}</a></li>
						@endforeach
					</ul>
				</td>
			</tr>
		@endforeach
	</tbody>
</table>
@stop