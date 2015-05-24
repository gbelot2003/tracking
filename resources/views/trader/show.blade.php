@extends('app')

@section('title', 'Registro')

@section('link-button')
	<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('TraderController@edit' ,$trader->id) }}">Editar Registro</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('personal') }}">Administración de Personal</a></li>
		<li><a href="{{ action('TraderController@show', $trader->id) }}">{{ $trader->last_name }}, {{ $trader->first_name }}</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	<div class="row">
		<div class="col-md-7">
			<h3>Datos de Especificos</h3>
			<div class="row">
				<div class="col-md-12 ">
					<b>Nombre Completo</b>
					<div class="warp shadow-z-2">
						<div class="row">
							<div class="col-md-12">
								<h4 class="text-danger">{{ $trader->last_name }}, {{ $trader->first_name }}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>

			<hr/>

			<div class="row">
				<div class="col-md-4">
					<b>Edificio/Sucursal</b>
					<div class="warp shadow-z-2 sect">
						<div class="row">
							<div class="col-md-12">
								<h4>{{ $trader->establecimiento->name }}</h4>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<b>Seccion/departamento</b>
					<div class="warp shadow-z-2 sect">
						<div class="row">
							<div class="col-md-12">
								<h4>{{ $trader->seccion->name }}</h4>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<b>Cargo</b>
					<div class="warp shadow-z-2 sect">
						<div class="row">
							<div class="col-md-12">
								<h4>{{ $trader->cargo->name }}</h4>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		<div class="col-md-5">
			<h3>Ultimos encargos</h3>
			<div class="row"></div>
		</div>
	</div>
@stop