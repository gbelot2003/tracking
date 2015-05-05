@extends('app')

@section('content')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Tablero</a></li>
		<li><a href="#">Administración de Usuarios</a></li>
	</ol>

	<div class="row">
		<div class="col-md-12">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<h2 class="page-title col-md-10">Administración de Usuarios</h2>

						<div class="col-md-2">
							<ul class="list-inline">
								<li>
									<a href="{{ action('UserController@create') }}" class="btn btn-primary">Crear</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<table class="table">
					<thead>
					<th>Nombre del Usuario</th>
					<th>Email</th>
					<th>Rol administrativo</th>
					</thead>
					<tbody>
					@foreach($users as $user)
						<tr>
							<td><a href="{{ action('UserController@show', $user->id) }}">{{ $user->name }}</a></td>
							<td>{{ $user->email }}</td>
							<td>
								@foreach($user->roles as $rol)
									<a href="{{ action('RolesController@show', $rol->id) }}">{{ $rol->name }}</a>
								@endforeach
							</td>
						</tr>
					@endforeach
					</tbody>
				</table>
			</div>
		</div>
	</div>
	</div>
@stop