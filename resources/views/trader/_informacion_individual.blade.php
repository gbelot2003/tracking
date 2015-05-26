	<h3>Información General</h3>
	<!-- Nav tabs -->
	<ul class="nav nav-tabs" role="tablist">
		<li role="presentation" class="active"><a href="#perfil" aria-controls="perfil" role="tab" data-toggle="tab">Datos del perfil</a></li>
		<li role="presentation"><a href="#relacionados" aria-controls="relacionados" role="tab" data-toggle="tab">Usuarios relacionados</a></li>
	</ul>
	<div class="tab-content">
		<div role="tabpanel" class="tab-pane active" id="perfil">
			@include('trader._tabla_individual')
		</div>
		<div role="tabpanel" class="tab-pane" id="relacionados">
			@include('trader._usuarios_relacionados')
		</div>
	</div>
