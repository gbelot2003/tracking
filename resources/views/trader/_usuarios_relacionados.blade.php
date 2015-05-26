
<table class="table">
	<caption>Responsables</caption>
	<thead>
	<th>No.</th>
	<th>Usuarios autenticados Responsables</th>
	</thead>
	<tbody>
	@foreach($users as $user)
		<tr>
			<td>{{ $user->id }}</td>
			<td><h4>{{ $user->name }}</h4></td>
		</tr>
	@endforeach
	</tbody>
</table>