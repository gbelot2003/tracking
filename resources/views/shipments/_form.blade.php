<div class="row">
	<div class="col-md-6">
		<div class="col-md-12">
		    <!-- sender Form Input -->
			<div class="form-group">
			    {!! Form::select('sender_id', $sender, null, ['class' => 'select form-control', 'id' => 'sender-select']) !!}
			</div>
		</div>

	</div>
	<div class="col-md-6">
		<!-- sender Form Input -->
		<div class="form-group">
			{!! Form::select('reciber_id', $reciver, null, ['class' => 'select form-control', 'id' => 'reciver-select']) !!}
		</div>
	</div>
	<div class="col-md-12">
		<!-- Description Form Input -->
		<div class="form-group">
			{!! Form::textarea("description", null, ['class' => 'form-control floating-label', 'placeholder' => 'Descripción']) !!}
		</div>
		<div class="form-group">
			{!! Form::submit($submitButtonText, ['class' => 'btn btn-primary']) !!}
		</div>
	</div>
</div>