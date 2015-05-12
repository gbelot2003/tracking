@extends('app')

@section('content')
<div class="container">
	<div class="row">
		<div class="col-md-10 col-md-offset-1">
			<div class="panel panel-default">
				<div class="panel-heading">Home</div>

				<div class="panel-body">
					You are logged in!
				</div>

			</div>
		</div>
	</div>
</div>
@endsection

@section('post-script')
<script>
	$(function() {
		$('#users-table').DataTable({
			"sDom": "<'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
			processing: true,
			serverSide: true,
			ajax: '{{ url("listado/usuarios") }}'
		});
	});
</script>
@stop