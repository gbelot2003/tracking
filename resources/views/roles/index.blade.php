@extends('app')

@section('content')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Tablero</a></li>
		<li><a href="#">Administración de Roles</a></li>
	</ol>

	<div class="row">
		<div class="col-md-12">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<h2 class="page-title col-md-10">Administración de Roles</h2>

						<div class="col-md-2">
							<ul class="list-inline">
								<li>
									<a href="{{ url('roles/create') }}" class="btn btn-primary">Crear</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

					<table class="table">
						<thead>
							<th>Nombre del Rol</th>
							<th>Descripción</th>
							<th>Nivel</th>
						</thead>
						<tbody>
							@foreach($roles as $role)
								<tr>
									<td><a href="{{ action('RolesController@show', $role->id) }}">{{ $role->name }}</a></td>
									<td>{{ $role->description }}</td>
									<td>{{ $role->level }}</td>
								</tr>
							@endforeach
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
@stop