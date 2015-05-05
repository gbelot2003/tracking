@extends('app')

@section('content')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Tablero</a></li>
		<li><a href="{{ url('roles') }}">Administración de Roles</a></li>
		<li><a href="#">Role {{ $roles->name }}</a></li>
	</ol>

	<div class="row">
		<div class="col-md-12">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<h2 class="page-title col-md-10">Rol de {{ $roles->name }}</h2>

						<div class="col-md-2">
							<ul class="list-inline">
								<li>
									<a href="{{ action('RolesController@edit', $roles->id) }}" class="btn btn-primary">Editar</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="panel-body">
					{!! Form::model($roles, ['method' => 'PUT', 'action' => ['RolesController@update', $roles->id]]) !!}
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="form-group">
								{!! Form::label('Nombre') !!}
								{!! Form::text("name", null, ['class' => 'form-control empty', 'placeholder' => 'Nombre', 'disabled' => '']) !!}
							</div>
						</div>

						<div class="col-md-6 col-sm-12">
							<div class="form-group">
								{!! Form::label('Descripción') !!}
								{!! Form::text("description", null, ['class' => 'form-control empty', 'placeholder' => 'Descripción', 'disabled' => '']) !!}
							</div>
						</div>

					</div>
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="form-group">
								{!! Form::label('url') !!}
								{!! Form::text("slug", null, ['class' => 'form-control empty', 'placeholder' => 'slug', 'disabled' => '']) !!}
							</div>
						</div>
						<div class="col-md-6 col-sm-12">
							<div class="form-group">
								{!! Form::label('Nivel') !!}
								{!! Form::text("level", null, ['class' => 'form-control empty', 'placeholder' => 'Nivel', 'disabled' => '']) !!}
							</div>
						</div>
					</div>
					{!! Form::close() !!}
				</div>
			</div>
		</div>
	</div>

	<div class="row">

			<div class="col-md-12">
				<div class="panel panel-default">
					<div class="panel-heading"><h2>Usuarios relacionados</h2></div>
				</div>

				<div class="panel-body">
					@foreach($user as $user)
					<div class="list-group">
						<div class="list-group-item">
							<div class="row-content">
								<h4 class="list-group-item-heading"><a href="{{ action('UserController@show', $user->id) }}">{{ $user->name }}</a></h4>
								<p class="list-group-item-text">Permisos relacionados</p>
							</div>
						</div>
						<div class="list-group-separator"></div>
					</div>
					@endforeach
				</div>
			</div>
	</div>

@stop
