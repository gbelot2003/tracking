<div class="row">
	<div class="col-md-12">
		<!-- Name Form Input -->
		<div class="form-group">
			{!! Form::text("name", null, ['class' => 'form-control floating-label', 'placeholder' => 'Nueva Sección']) !!}
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-primary">{{ $submitButtonText }}</button>
		</div>
	</div>
</div>