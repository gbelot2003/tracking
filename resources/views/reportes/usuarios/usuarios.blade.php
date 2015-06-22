@extends('app-ui')

@section('title', 'Reportes de encomiendas por usuarios')

@section('breadcrumbs')
	<ol class="breadcrumb hidden-print">
		<li><a href="{{ url('home') }}">Inicio</a></li>
		<li><a href="#">Reportes de encomiendas por usuarios</a></li>
	</ol>
@stop

@section('content')
	<table id="users-table" class="table table-hover table-borderd">
		<thead>
			<th>No.</th>
			<th>Usuario</th>
			<th>email</th>
			<th>Cargo</th>
			<th>Ubicación</th>
		</thead>
		<tbody>
		@foreach($user as $user)
			<tr>
				<td>{{ $user->id }}</td>
				<td>{{ $user->name }}</td>
				<td>{{ $user->email }}</td>
				<td>
					@foreach($user->roles as $role)
						{{ $role->name }}
					@endforeach
				</td>
				<td>{{ $user->establecimiento->name }}</td>
			</tr>
		@endforeach
		</tbody>
	</table>
@stop

@section('post-script')
	<script>
		$(function() {
			$('#users-table').DataTable({
				"language": {
					"lengthMenu": "Mostrar _MENU_ registros por página",
					"zeroRecords": "Registro no encotrado - lo sentimos",
					"info": "Mostrando página _PAGE_ de _PAGES_",
					"infoEmpty": "No hay registros de esa busqueda",
					"infoFiltered": "(filtrado de _MAX_ total Total de regístros)",
					"search":  "Busqueda:",
					"paginate": {
						"first":      "Primero",
						"last":       "Ultimo",
						"next":       "Siguiente",
						"previous":   "Anterior"
					}
				}
			});
		});
	</script>
@stop