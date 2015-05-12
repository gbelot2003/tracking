@extends('app')

@section('content')
<div>
	<table id="users-table" class="table table-condensed">
		<thead>
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>Email</th>
		</tr>
		</thead>
	</table>
</div>
@stop
@section('post-script')
	<script>
		$(function() {
			$('#users-table').DataTable({
				"sDom": "<'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
				processing: true,
				serverSide: true,
				ajax: '{{ url("listados/usuarios-data") }}'
			});
		});
	</script>
@stop