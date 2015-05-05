@extends('app')

@section('content')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Tablero</a></li>
		<li><a href="{{ url('user') }}">Administración de Usuarios</a></li>
		<li><a href="#">{{ $user->name }}</a></li>
	</ol>

	<div class="row">
		<div class="col-md-12">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<h2 class="page-title col-md-10">{{ $user->name }}</h2>

						<div class="col-md-2">
							<ul class="list-inline">
								<li>
									<a href="{{ action('UserController@edit', $user->id) }}" class="btn btn-primary">Editar</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="panel-body">
					{!! Form::model($user, ['method' => 'PUT', 'action' => ['UserController@update', $user->id]]) !!}
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="form-group">
								{!! Form::label('Nombre') !!}
								{!! Form::text("name", null, ['class' => 'form-control empty', 'placeholder' => 'Nombre', 'disabled' => '']) !!}
							</div>
						</div>

						<div class="col-md-6 col-sm-12">
							<div class="form-group">
								{!! Form::label('Email') !!}
								{!! Form::text("email", null, ['class' => 'form-control empty', 'placeholder' => 'Email', 'disabled' => '']) !!}
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6 col-sm-12">
							<div class="form-group">
								<ul class="list-inline">
									@foreach($user->roles as $role)
										<li><a href="{{ action('RolesController@show', $role->id) }}">{{ $role->name }}</a></li>
									@endforeach
								</ul>

							</div>
						</div>
					</div>
					{!! Form::close() !!}
				</div>

			</div>
		</div>
	</div>

@stop
