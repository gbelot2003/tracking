@extends('app')

@section('content')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Tablero</a></li>
		<li><a href="{{ url('roles') }}">Administración de Roles</a></li>
		<li><a href="{{ action('RolesController@show', $roles->id) }}">Role {{ $roles->name }}</a></li>
		<li><a href="#">Editar</a></li>
	</ol>

	<div class="row">
		<div class="col-md-12">
			<div class="panel panel-default">
				<div class="panel-heading">
					<div class="row">
						<h2 class="page-title col-md-10">Edición de {{ $roles->name }}</h2>

						<div class="col-md-2">
							<ul class="list-inline">
								<li>
									<a href="{{ action('RolesController@show', $roles->id) }}" class="btn btn-primary">Regresar</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				@if (count($errors) > 0)
					<div class="alert alert-danger">
						<strong>Whoops!</strong> There were some problems with your input.<br><br>
						<ul>
							@foreach ($errors->all() as $error)
								<li>{{ $error }}</li>
							@endforeach
						</ul>
					</div>
				@endif
				<div class="panel-body">
					{!! Form::model($roles, ['method' => 'PUT', 'action' => ['RolesController@update', $roles->id]]) !!}
						@include('roles._form', ['submitButtonText' => 'Editar Rol'])
					{!! Form::close() !!}
				</div>
			</div>
		</div>
	</div>
@stop