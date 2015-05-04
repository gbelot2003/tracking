<div class="row">
	<div class="col-md-6 col-sm-12">
		<div class="form-group">
			{!! Form::text("name", null, ['class' => 'form-control floating-label', 'placeholder' => 'Nombre']) !!}
		</div>
	</div>

	<div class="col-md-6 col-sm-12">
		<div class="form-group">
			{!! Form::text("description", null, ['class' => 'form-control floating-label', 'placeholder' => 'Descripción']) !!}
		</div>
	</div>

</div>
<div class="row">
	<div class="col-md-6 col-sm-12">
		<div class="form-group">
			{!! Form::text("slug", null, ['class' => 'form-control floating-label', 'placeholder' => 'slug']) !!}
		</div>
	</div>
	<div class="col-md-6 col-sm-12">
		<div class="form-group">
			{!! Form::text("level", null, ['class' => 'form-control floating-label', 'placeholder' => 'Nivel']) !!}
		</div>
	</div>
</div>

	<!--  Form Input -->
	<div class="form-group">
		{!! Form::submit($submitButtonText, ['class' => 'btn btn-primary']) !!}
	</div>

