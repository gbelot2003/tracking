@extends('app')

@section('title')
	{{ $user->name }}
@stop

@section('link-button')
	<a id="virtual-form" class="btn btn-material-cyan" href="{{ action('UserController@edit' ,$user->id) }}">Editar Usuario</a>
@stop

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('user') }}">Administración de usuarios</a></li>
		<li><a href="#">{{ $user->name }}</a></li>
	</ol>
@stop
@section('content')
	@include('partials.flash')
	<style>
		.sect{
			height: 8rem;
		}

		.warp{
			padding: 5px
		}
	</style>
	<div class="row">
		<div class="col-md-12">
			<h3>Datos de Especificos</h3>
			<div class="row">
				<div class="col-md-3 ">
					<b>Apellido(s):</b>
					<div class="warp shadow-z-2">
						<div class="row">
							<div class="col-md-12">
								{{ $user->last_name }}
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 ">
					<b>Nombre(s):</b>
					<div class="warp shadow-z-2">
						<div class="row">
							<div class="col-md-12">
								{{ $user->first_name }}
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 ">
					<b>Email:</b>
					<div class="warp shadow-z-2">
						<div class="row">
							<div class="col-md-12">
								{{ $user->email }}
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 ">
					<b>Rol:</b>
					<div class="warp shadow-z-2">
						<div class="row">
							<div class="col-md-12">
								@foreach($user->roles as $rol)
									{{ $rol->display_name }}
								@endforeach
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@stop