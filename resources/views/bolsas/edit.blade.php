@extends('app')

@section('title', 'Creación de Bolsas')

@section('breadcrumbs')
	<ol class="breadcrumb">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="{{ url('bolsas') }}">Administración de Bolsas</a></li>
		<li><a href="#!">Edición de Bolsas No. {{ $bolsas->code }}</a></li>
	</ol>
@stop

@section('content')
	<div class="col-md-12">
		@include('partials.flash')
		@include('errors.form-error')

		{!! Form::model($bolsas, ['method' => 'PUT', 'action' => ['BolsasController@update', $bolsas->id]]) !!}
			@include('bolsas._edit')
		{!! Form::close() !!}

	</div>
@stop
@section('post-script')
	<script src="{{ URL::asset("js/forms.js") }}"></script>
	<script src="{{ URL::asset("js/vue.js") }}"></script>
	<script>
		$(document).ready(function(){
			$('.removeItem').each(function(){
				$(this).on('click', function(e){
					e.preventDefault();
					var shipment = $(this).attr('href');
					$(this).closest('tr').remove();
					var rimput = ("<input name='removed-items[]' type='hidden' value='"+ shipment +"' />");
					$('#removed-items').append(rimput);

				});
			});
		});
	</script>
@stop