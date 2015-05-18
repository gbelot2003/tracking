<nav class="navbar navbar-default">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle Navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="{{ url('/') }}">Sistema de Tracking</a>
		</div>

		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li><a href="{{ url('/') }}">Home</a></li>
			</ul>

			<ul class="nav navbar-nav navbar-right">
				@if (Auth::guest())
					<li><a href="{{ url('/auth/login') }}">Login</a></li>

				@else

					@if(Auth::user()->hasRole(['supervisor, currier']))
						<li><a href="{{ url('/clientes') }}">Clientes</a></li>
					@endif

					<li class="dropdown">
						<a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" href="#!">Configuraciones Generales<span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="{{ url('establecimientos') }}">Agencias y establecimientos</a></li>
							<li><a href="{{ url('secciones') }}">Secciones administrativas</a></li>
							<li><a href="{{ url('cargos') }}">Cargos de personal</a></li>
							<li><a href="#">Control de Personal</a></li>
						</ul>
					</li>

					@if(Auth::user()->hasRole(['owner']))
						<li class="dropdown">
							<a class="dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-expanded="false">Usuarios y Permisos <span class="caret"></span></a>
							<ul class="dropdown-menu">
								<li><a href="{{ url('user') }}">Usuarios</a></li>
								<li><a href="{{ url('roles') }}">Roles</a></li>
								<li><a href="{{ url('permisos') }}">Permisos</a></li>
							</ul>
						</li>
					@endif

					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">{{ Auth::user()->name }} <span class="caret"></span></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="{{ url('/auth/logout') }}">Logout</a></li>
						</ul>
					</li>
				@endif
			</ul>
		</div>
	</div>
</nav>
