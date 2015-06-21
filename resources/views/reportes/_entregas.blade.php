		<div id="filtros" class="col-md-12 hidden-print">
			<div class="row">
				<form>
					<h3>Filtrados por</h3>
					<div class="row">
						<div class="col-md-12">
							<div class="">

								<div class="col-md-4">
									<div class="">
										<label for="" class="">Establecimiento</label>
										{!! Form::select('establecimiento_id', $establecimiento, null, ['class' => 'select form-control', 'id' => "establecimientos", 'v-establecimiento' => 'establecimiento_id', 'v-model' => 'establecimiento_id']) !!}
									</div>
								</div>

								<div class="col-md-4">
									<div class="">
										<label for="" class="">Estados</label>
										{!! Form::select('estado_id', $estados, null, ['class' => 'select form-control', 'id' => 'estado', 'v-estado' => 'estado_id', 'v-model' => 'estado_id']) !!}
									</div>
								</div>

								<div class="col-md-2">
									<div class="form-group">
										<label class="" for="">Fecha</label>
										{!! Form::input('date', 'created_at', date('Y-m-d'), ['class' => 'fecha', 'max' => date('Y-m-d'), 'v-model' => 'fecha']) !!}
									</div>
								</div>
								<div class="col-md-2">
									<div class="form-group">
										<button type="button" class="btn btn-primary" v-on="click: getQuery">Buscar</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
				<hr/>
			</div>
		</div>
