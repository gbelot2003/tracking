<div class="row">
	<div class="col-md-4">
		<!-- Code Form Input -->
		<div class="form-group">
			{!! Form::label('code', "Code:") !!}
			{!! Form::text("code", null, ['class' => 'form-control']) !!}
		</div>
	</div>
	<div class="col-md-4">
		<!-- sender Form Input -->
		<div class="form-group">
			{!! Form::label('destino_id', "Destino :") !!}
			{!! Form::select('destino_id', $establecimientos, null, ['class' => 'select form-control', 'id' => 'sender-select']) !!}
		</div>
	</div>
	<div class="col-md-4">
		<div class="form-group">
			{!! Form::label('firma', "Firma:") !!}
			{!! Form::file('firma', ['multiple'=> 'true'], ['class' => 'form_contro']) !!}
		</div>
	</div>
</div>
