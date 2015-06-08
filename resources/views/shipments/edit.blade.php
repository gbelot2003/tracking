@extends('app')

@section('title', 'Editando registro encomienda')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('shipments') }}">Administración de Encomiendas</a></li>
		<li><a href="{{ action('ShipmentCotroller@show', $paquete->id) }}">{{ $paquete->code }}</a></li>
		<li><a href="#!">Editando registro encomienda</a></li>
	</ol>
@stop

@section('content')
	@include('partials.flash')
	@include('errors.form-error')
	{!! Form::model($paquete, ['method' => 'PUT', 'action' => ['ShipmentCotroller@update', $paquete->id]]) !!}
		@include('shipments._form',['submitButtonText' => 'Editar'])
	{!! Form::close() !!}
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