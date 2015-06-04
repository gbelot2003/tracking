<div class="row">
	<div class="col-md-12">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h3 class="panel-title">codigo</h3>
			</div>
			<div class="panel-body">
			
				<!-- code Form Input -->
				<div class="form-group">
					{!! Form::text("code", null,  ['class' => 'select form-control']) !!}
				</div>
			</div>
		</div>
	</div>
	
	<div class="col-md-6">
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h3 class="panel-title">Destinatario (A quien va dirigido el paquete)</h3>
			</div>
			<div class="panel-body">
			
				<!-- sender Form Input -->
				<div class="form-group">
					{!! Form::select('reciber_id', $reciver, null, ['class' => 'select form-control', 'id' => 'reciver-select']) !!}
				</div>
			</div>
		</div>
	</div>

	<div class="col-md-6">
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">Remitente (Quien envia el paquete)</h3>
			</div>
			<div class="panel-body">
				<!-- sender Form Input -->
				<div class="form-group">
					{!! Form::select('sender_id', $sender, null, ['class' => 'select form-control', 'id' => 'sender-select']) !!}
				</div>
			</div>
		</div>
	</div>


	<div class="col-md-12">
		<!-- Description Form Input -->
		<div class="form-group">
			{!! Form::textarea("description", null, ['class' => 'form-control floating-label', 'placeholder' => 'Descripción']) !!}
		</div>
		@if(Auth::user()->hasRole(['owner', 'admin', 'supervisor', 'centro-acopio', 'currier']))
		<div class="form-group">
			{!! Form::select('estado_id', $estado, 2, ['class' => 'select form-control', 'id' => 'estado-select']) !!}
		</div>
		@endif
		@if(Auth::user()->hasRole(['cliente']))
			{!! Form::hidden('estado_id', 1) !!}
		@endif
		<div class="form-group">
			{!! Form::submit($submitButtonText, ['class' => 'btn btn-primary']) !!}
		</div>
	</div>
</div>
