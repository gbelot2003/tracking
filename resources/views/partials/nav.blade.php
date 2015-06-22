<nav class="navbar navbar-default">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle Navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="" href="{{ url('/') }}"><img src="{{ asset('images/b_logo.jpg') }}" alt=""/></a>
		</div>

		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

			<ul class="nav navbar-nav navbar-right">
				@if (Auth::guest())
					<li><a href="{{ url('/auth/login') }}">Login</a></li>
				@else

				@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor']))

					<li class="dropdown">
						<a class="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-expanded="false">Reportes<span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="{{ url('/reportes/reportes-entregas/') }}">Reporte por fechas y estados</a></li>
							<li><a href="{{ url('/reportes/reporte-usuarios/') }}">Reporte por usuarios</a></li>
						</ul>
					</li>
				@endif

					@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor', 'centro-acopio', 'currier']))
					<li><a data-toggle="modal" data-target="#myModal"><strong>Busqueda Rapida</strong></a></li>
					<li class="dropdown">
						<a class="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-expanded="false">Encomiendas<span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="{{ url('/listados/listados-personas/') }}"><strong>Nueva
										Encomienda</strong></a></li>
							<li><a href="{{ url('/shipments') }}">Administración de Encomiendas</a></li>
							@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor', 'centro-acopio']))
								<li><a href="{{ url('/bolsas/create/') }}"><strong>Nueva Bolsa</strong></a></li>
							@endif
							@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor', 'centro-acopio', 'currier']))
								<li><a href="{{ url('bolsas') }}">Administración de Bolsas</a></li>
							@endif
						</ul>
					</li>
				@endif


					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" href="#!">Configuraciones Generales<span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor', 'centro-acopio', 'currier']))
								<li><a href="{{ url('establecimientos') }}">Agencias y Establecimientos</a></li>
								<li><a href="{{ url('secciones') }}">Secciones Administrativas</a></li>
								<li><a href="{{ url('personal') }}">Control de Personal</a></li>
							@endif
							@if(Auth::user()->hasRole(['cliente']))
								<li><a href="{{ url('mis-paquetes') }}">Mis Paquetes</a></li>
							@endif

						</ul>
					</li>


					@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor']))
						<li class="dropdown">
							<a class="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-expanded="false">Usuarios y Permisos <span class="caret"></span></a>
							<ul class="dropdown-menu">

								@if(Auth::user()->hasRole(['owner', 'admin']))

									<li><a href="{{ url('permisos') }}">Permisos</a></li>
									<li><a href="{{ url('roles') }}">Roles</a></li>

								@endif

									<li><a href="{{ url('user') }}">Usuarios</a></li>

							</ul>
						</li>
					@endif

					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{ Auth::user()->name }} <span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="{{ action('UserController@edit', Auth::user()->id) }}">Editar Perfil</a></li>
							<li><a href="{{ url('/auth/logout') }}">Logout</a></li>
						</ul>
					</li>
				@endif
			</ul>

		</div>
	</div>
</nav>
