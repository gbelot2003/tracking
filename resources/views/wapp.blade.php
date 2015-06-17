@if(!Request::ajax())
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>@yield('page-title', 'Sistema Web de Control de Paquetería, Mensajería y Correspondencia')</title>

		<link rel="stylesheet" href="{{ URL::asset("css/app.css") }}">

		<!-- Fonts -->
		<link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>


	</head>
	<body>
	@include('partials.nav')
	<div>
		<div class="row-fluid">
			<div class="col-md-12 full-border">
				<div class="row-fluid">

					@if($__env->yieldContent('link-button'))

						<div class="col-md-9">
							<h1 class="page-title main-title"><img src="{{ URL::asset("images/logo.svg") }}"
							                                       class="logo-top"
							                                       alt="logo"/>@yield('title', '<span class="blue-text">Track</span><span class="light-blue-text">HN</span>')
								<div></div>
							</h1>
							<div class="text-center">
								<h1 class="intro-title-description">Sistema Web de Control de Paquetería, Mensajería y
									Correspondencia.</h1>
							</div>
						</div>

						<div class="col-md-3">@yield('link-button')</div>

					@else

						<div class="col-md-12 text-center">
							<h1 class="page-title main-title"><img src="{{ URL::asset("images/logo.svg") }}"
							                                       class="logo-top"
							                                       alt="logo"/>@yield('title', '<span class="blue-text">Track</span><span class="light-blue-text">HN</span>')
								<div></div>
							</h1>
							<div class="text-center">
								<h1 class="intro-title-description">Sistema Web de Control de Paquetería, Mensajería y
									Correspondencia.</h1>
							</div>
						</div>

					@endif

				</div>

				<div class="breadcrumbs">
					@yield('breadcrumbs')
				</div>
				<div id="content" class="sideless">
					@yield('content')
				</div>
				<div class="footer-container" id="footer">
					<div class="row fix-col-width footer-style">
						<div class="col-sm-3 text-center">
							<img src="{{ URL::asset("images/conecta-logo.jpg") }}" class="foot-image"/>
						</div>
						<div class="col-sm-9">
							<p class="credits">
								Desarrollado por Conect@ <a href="http://www.conectahn.com" target="_blank"
								                            class="foot-link">www.conectahn.com</a> / trackhn@conectahn
								.com / Tel.<span class="blue-lighten">(504) 22320363</span> /Móvil <span
										class="blue-lighten">(504) 32513747</span>/
								Administración Ing.Hárold Rivera / Desarrollador Web: Gerardo Belot / Desarrollador de
								Android: César Morgan / Diseño Web Gráfico: Rodrigo Cálix / Soporte Técnico: José David
								Trochez.
							
							</p>
						</div>
					</div>
					<section class="footer-bottom">
						&#169; Track-Hn Marca Registrada.
					</section>
				</div>
			</div>
		</div>
	</div>

	<!-- Scripts -->
	<script src="{{ URL::asset("js/wapp.js") }}"></script>
	@yield('post-script')
	</body>
	</html>
@else
	@yield('content')
@endif



