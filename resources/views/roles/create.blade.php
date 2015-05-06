@extends('app')
@section('title', 'Creación de Roles')
@section('content')
	<div class="col-md-12">
		{!! Form::open() !!}
		<div class="row">
			<div class="col-md-6 col-sm-12">
				<!-- Name Form Input -->
				<div class="form-group">
					{!! Form::text("name", null, ['class' => 'form-control floating-label', 'placeholder' => 'Nombre']) !!}
				</div>
			</div>

			<div class="col-md-6 col-sm-12">
				<!-- Name Form Input -->
				<div class="form-group">
					{!! Form::text("display_name", null, ['class' => 'form-control floating-label', 'placeholder' => 'Nombre legible para humanos']) !!}
				</div>
			</div>

			<div class="col-md-12">
				<!-- Name Form Input -->
				<div class="form-group">
					{!! Form::text("description", null, ['class' => 'form-control floating-label', 'placeholder' => 'Descripción del rol']) !!}
					<span class="text-red small">Todos los campos aceptan 255 caracteres</span>
				</div>
			</div>
		</div>
		{!! Form::close() !!}
	</div>
@stop