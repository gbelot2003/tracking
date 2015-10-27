@extends('app')

@section('title', 'Dashboar Administrativo')

@section('content')
	<div id="dashboard">

		<pre>@{{ $data | json }}</pre>
	</div>
@stop

@section('post-script')
	<script src="/js/dash/dash.js"></script>
@stop