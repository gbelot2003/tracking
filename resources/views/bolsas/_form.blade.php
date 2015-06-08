<div class="row">
	<div class="col-md-6">
		<!-- Code Form Input -->
		<div class="form-group">
			{!! Form::label('code', "Code:") !!}
			{!! Form::text("code", null, ['class' => 'form-control']) !!}
		</div>
	</div>
	<div class="col-md-6">
		<div class="form-group">
			{!! Form::label('firma', "Firma:") !!}
			{!! Form::file('firma', ['multiple'=> 'true'], ['class' => 'form_contro']) !!}
		</div>
	</div>
</div>
