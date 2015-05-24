<div class="col-md-7">
	<h3>Información General</h3>
	<div class="row">
		<div class="col-md-12 ">
			<b>Nombre Completo</b>
			<div class="warp shadow-z-2">
				<div class="row">
					<div class="col-md-12">
						<h4 class="text-danger">{{ $trader->last_name }}, {{ $trader->first_name }}</h4>
					</div>
				</div>
			</div>
		</div>
	</div>

	<hr/>

	<div class="row">
		<div class="col-md-4">
			<b>Edificio/Sucursal</b>
			<div class="warp shadow-z-2 sect">
				<div class="row">
					<div class="col-md-12">
						<h4>{{ $trader->establecimiento->name }}</h4>
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-4">
			<b>Seccion/departamento</b>
			<div class="warp shadow-z-2 sect">
				<div class="row">
					<div class="col-md-12">
						<h4>{{ $trader->seccion->name }}</h4>
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-4">
			<b>Cargo</b>
			<div class="warp shadow-z-2 sect">
				<div class="row">
					<div class="col-md-12">
						<h4>{{ $trader->cargo->name }}</h4>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>