@extends('app')

@section('content')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Tablero</a></li>
		<li><a href="{{ url('roles') }}">Administración de Roles</a></li>
		<li><a href="#">Creación de nuevos roles</a></li>
	</ol>

	<div class="row">
		<div class="col-md-12">
			<div class="panel panel-default">
				<div class="panel-heading"><h2 class="page-title">Creación de Roles</h2></div>
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
					{!! Form::open(['url' => 'roles']) !!}
					@include('roles._form', ['submitButtonText' => 'Crear Rol'])
					{!! Form::close() !!}
				</div>
			</div>
		</div>
	</div>
@stop