@extends('wapp')
@section('content')
	<section class="intro-text">
		<div class="intro-text-wrapper">
			<div class="intro-text-container">
				Ofrece gran utilidad en la Banca, Empresas Courier e industria en general, donde se involucran grandes
				volúmenes de información que requiere ser registrada y monitoreada.
			</div>
		</div>
	</section>

	<section class="main-description">
		<div class="text-center">
			<h1 class="title-description">Características Principales</h1>
		</div>

		<div class="feature-box-container">
			<div class="feature-box wow flipInX" data-wow-duration="2s">
				<h2>
					<i class="mdi-device-gps-fixed"></i>
					Integración de tecnologías a los procesos de rastreo.
				</h2>
			</div>
		</div>

		<div class="feature-box-container">
			<div class="feature-box wow flipInY" data-wow-duration="2s">
				<h2>
					<i class="mdi-communication-email"></i>
					Control y monitoreo de correspondencia interna y externa.
				</h2>
			</div>
		</div>

		<div class="feature-box-container">
			<div class="feature-box wow zoomInUp" data-wow-duration="2s">
				<h2>
					<i class="mdi-file-cloud"></i>
					Plataforma basada en la nube permite 24/7/365 de utilización de la información en tiempo real y
					accesible desde cualquier lugar en el mundo.
				</h2>
			</div>
		</div>

		<div class="feature-box-container">
			<div class="feature-box wow zoomInDown" data-wow-duration="2s">
				<h2>
					<i class="mdi-action-assessment"></i>
					Base de Datos que permite la generación de reportes y consultas de gran utilidad en la toma de
					decisiones.
				</h2>
			</div>
		</div>


	</section>

	<section>
		<div class="text-center">
			<h1 class="title-description wow bounceIn" data-wow-duration="2s" data-wow-delay="1s">Galería del
				Sistema</h1>
		</div>
		<div class="row fix-col-width">
			<div class="col-sm-3 text-center">
				<img src="{{ URL::asset("images/gall-1.jpg") }}" class="materialboxed wow slideInLeft gall-img"
				     data-wow-duration="2s" data-caption="Sistema de trackHN."/>
			</div>
			<div class="col-sm-3 text-center">
				<img src="{{ URL::asset("images/gall-2.jpg") }}" class="materialboxed wow slideInUp gall-img"
				     data-wow-duration="2s" data-caption="Escáner de código con dispositivos móviles."/>
			</div>
			<div class="col-sm-3 text-center">
				<img src="{{ URL::asset("images/gall-3.jpg") }}" class="materialboxed wow slideInUp gall-img"
				     data-wow-duration="2s" data-caption="Aplicación Android"/>
			</div>
			<div class="col-sm-3 text-center">
				<img src="{{ URL::asset("images/gall-4.jpg") }}" class="materialboxed wow slideInRight gall-img"
				     data-wow-duration="2s" data-caption="Escáner de código de barras"/>
			</div>
		</div>

	</section>
@stop