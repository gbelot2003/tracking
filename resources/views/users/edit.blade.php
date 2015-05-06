@extends('app')

@section('content')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Tablero</a></li>
		<li><a href="{{ url('user') }}">Administración de Usuarios</a></li>
		<li><a href="{{ action('UserController@show', $user->id) }}">{{ $user->name }}</a></li>
		<li><a href="#">Editar</a></li>
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
									<a href="{{ action('UserController@show', $user->id) }}" class="btn btn-primary">Editar</a>
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
								{!! Form::text("name", null, ['class' => 'form-control empty', 'placeholder' => 'Nombre']) !!}
							</div>
						</div>

						<div class="col-md-6 col-sm-12">
							<div class="form-group">
								{!! Form::label('Email') !!}
								{!! Form::text("email", null, ['class' => 'form-control empty', 'placeholder' => 'Email']) !!}
							</div>
						</div>
					</div>

					<div class="form-group">
						{!! Form::submit('Editar', ['class' => 'btn btn-primary']) !!}
					</div>
					{!! Form::close() !!}
				</div>

			</div>
		</div>
	</div>

@stop