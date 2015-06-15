@extends('app')

@section('title', 'Creación de Bolsas')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('bolsas') }}">Administración de Bolsas</a></li>
		<li><a href="#!">Creación de Bolsas</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('partials.flash')
		@include('errors.form-error')

			{!! Form::open(['action' => ['BolsasController@store']]) !!}
				@include('bolsas._form')
			{!! Form::close() !!}
			<hr/>
	</div>
@stop
@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
	<script src="{{ URL::asset("js/vue.js") }}"></script>
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