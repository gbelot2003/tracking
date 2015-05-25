@if (count($errors) > 0)
	<div class="alert alert-danger">
		<strong>Whoops!</strong> Hay algunos problemas con su entrada de datos!!!.<br><br>
		<ul>
			@foreach ($errors->all() as $error)
				<li>{{ $error }}</li>
			@endforeach
		</ul>
	</div>
@endif