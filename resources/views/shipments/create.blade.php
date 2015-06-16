@extends('app')

@section('title', 'Creación de nueva encomienda')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Administración de Encomiendas</a></li>
		<li><a href="{{ url('shipments/create') }}">Creación de nueva encomienda</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('partials.flash')
		@include('errors.form-error')

	@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor', 'centro-acopio', 'currier']))
		<div class="options">
			<ul class="list-inline">
				<li><a href="#!" class="inline btn btn-material-orange" id="perfil">Crear nuevo perfil</a></li>
				<li><a href="#!" class="inline btn btn-material-red" id="cerrar-perfil">Cerrar formulario</a></li>
			</ul>
		</div>
		<div id="create-form" class="col-md-12">
		</div>
		<hr />
		@endif
		{!! Form::open(['action' => ['ShipmentCotroller@store']]) !!}
			@include('shipments._form',['submitButtonText' => 'Registrar'])
		{!! Form::close() !!}
	</div>
@stop
@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
	<script>
		/** shipments code creation **/
		if($('#code').val().length === 0){
			$('#generate').on('click', function(e){
				e.preventDefault();
				bootbox.dialog({
					message: "Estas por generar un <b>numero guia</b> para esta encomienda, estas seguro que es lo que deseas??",
					title: "Generación de Codigo",
					buttons:{
						success:{
							label: 'Crear numero de guia',
							callback: function() {
								var num = Math.floor(Math.random() * 900000000) + 100000000;
								$('#code').val(num);
								$('#generate').attr( "disabled", "disabled" );
							}
						}
					}
				});
			});
		} else {
			$('#generate').attr( "disabled", "disabled" );
		}
	</script>
@stop