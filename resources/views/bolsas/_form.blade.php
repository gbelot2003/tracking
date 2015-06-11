<div class="row">
	<div class="col-md-3">
		<!-- Code Form Input -->
		<div class="form-group">
			{!! Form::label('code', "Code:") !!}
			{!! Form::text("code", null, ['class' => 'form-control']) !!}
		</div>
	</div>
	<div class="col-md-3">
		<!-- sender Form Input -->
		<div class="form-group">
			{!! Form::label('destino_id', "Destino :") !!}
			{!! Form::select('destino_id', $establecimientos, null, ['class' => 'select form-control', 'id' => 'sender-select']) !!}
		</div>
	</div>
	<div class="col-md-2">
		<div class="form-group">
			{!! Form::label('firma', "Firma:") !!}
			{!! Form::file('estado_id', ['class' => 'form_contro']) !!}
		</div>
	</div>
</div>
<hr/>
<div class="table-responsive">
	<table id="shipmentsTable" class="table table-hover">
		<thead>
		<th>No. Guia</th>
		<th>Remitente</th>
		<th>Destinatario</th>
		<th>Descripción</th>
		<th>Seleccionar</th>
		</thead>
	</table>
</div>
<div class="form-group">
	{!! Form::submit($submitButtonText, ['class' => 'btn btn-primary']) !!}
</div>
