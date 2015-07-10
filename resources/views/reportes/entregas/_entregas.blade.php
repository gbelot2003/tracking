		<div id="filtros" class="col-md-12 hidden-print">
			<div class="row">
				<form>
					<div class="row">
						<div class="col-md-12">
							<div class="btn-group" role="group" aria-label="...">
								<button type="button" class="btn btn-primary" v-on="click: getQuery">Buscar</button>
								<button type="button" class="btn btn-info" v-on="click: getEntregados">paquetes entregados en el periodo</button>
								<button type="button" class="btn yellow darken-1" v-on="click: getErrores">paquetes extraviados o robados en el periodo</button>
							</div>
						</div>
						<div class="col-md-12">
							<div class="col-md-2">
								<div class="form-group">
									<label class="" for="">Fecha de inicio</label>
									{!! Form::input('date', 'created_at', date('Y-m-d'), ['class' => 'fecha', 'max' => date('Y-m-d'), 'v-model' => 'inicio']) !!}
								</div>
							</div>

							<div class="col-md-2">
								<div class="form-group">
									<label class="" for="">Fecha final</label>
									{!! Form::input('date', 'created_at', date('Y-m-d'), ['class' => 'fecha', 'max' => date('Y-m-d'), 'v-model' => 'final']) !!}
								</div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="">

								<div class="col-md-5">
									<div class="">
										<label for="" class="">Establecimiento</label>
										{!! Form::select('establecimiento_id', $establecimiento, null, ['class' => 'select form-control', 'id' => "establecimientos", 'v-establecimiento' => 'establecimiento_id', 'v-model' => 'establecimiento_id']) !!}
									</div>
								</div>

								<div class="col-md-5">
									<div class="">
										<label for="" class="">Estados</label>
										{!! Form::select('estado_id', $estados, null, ['class' => 'select form-control', 'id' => 'estado', 'v-estado' => 'estado_id', 'v-model' => 'estado_id']) !!}
									</div>
								</div>
							</div>
						</div>

					</div>
				</form>
				<hr/>
			</div>
		</div>
