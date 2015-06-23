<div id="filtros" class="col-md-12 hidden-print">
	<div class="row">
		<form>
			<div class="row">
				<div class="col-md-12">

					<div class="col-md-2">
						<div class="form-group">
							<label class="" for="">Fecha de inicio</label>
							<input value="{{ $user->id }}" type="hidden" v-model="userId"/>
							{!! Form::input('date', 'created_at', date('Y-m-d'), ['class' => 'fecha', 'max' => date('Y-m-d'), 'v-model' => 'inicio']) !!}
						</div>
					</div>

					<div class="col-md-2">
						<div class="form-group">
							<label class="" for="">Fecha final</label>
							{!! Form::input('date', 'created_at', date('Y-m-d'), ['class' => 'fecha', 'max' => date('Y-m-d'), 'v-model' => 'final']) !!}
						</div>
					</div>

					<div class="col-md-5">
						<div class="">
							<label for="" class="">Estados</label>
							{!! Form::select('estado_id', $estados, null, ['class' => 'select form-control', 'id' => 'estado', 'v-estado' => 'estado_id', 'v-model' => 'estado_id']) !!}
						</div>
					</div>

					<div class="col-md-2">
						<div class="form-group">
							<button type="button" class="btn btn-primary btn-sm" v-on="click: getShipmentsUsersStates(userId, inicio, final, estado_id)">Buscar</button>
						</div>
					</div>

				</div>
			</div>
		</form>
	</div>
</div>
