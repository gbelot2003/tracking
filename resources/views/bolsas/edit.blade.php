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
		<div class="row">
			<div class="col-md-4"></div>
			<div class="col-md-8">
				<div class="row">
					<div class="col-md-2"></div>
					<div class="col-md-5">
						{!! Form::open(['action' => ['TransitosBolsasController@store'], 'class' => 'form-inline', 'data-ask-submit'] ) !!}
							<button id="virtual-form" type="submit" class="btn btn-primary " href="">Transito carriers locales</button>
							{!! Form::hidden('bolsa_id', $bolsas->id) !!}
							{!! Form::hidden('estado_id', '14') !!}
							{!! Form::hidden('establecimiento_id', Auth::user()->establecimiento->id) !!}
							{!! Form::hidden('user_id', Auth::id()) !!}
						{!! Form::close() !!}
					</div>

					<div class="col-md-5">
						<a id="virtual-form" class="btn btn-info " href="{{ url('bolsas/transitos/create/'. $bolsas->id ) }}">Transito con observaciones</a>
					</div>
				</div>
			</div>
		</div>
		<hr/>
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