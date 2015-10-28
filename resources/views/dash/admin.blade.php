@extends('app')

@section('title', 'Dashboar Administrativo')

@section('content')
	<div id="dashboar" ng-app="dashApp">
		<div class="row">
			<div class="col-md-12">
				<ul class="nav nav-pills">
					<li role="presentation" ><a href="#/">Encomiendas</a></li>
					<li role="presentation" ><a href="#/bolsas">Bolsas</a></li>
				</ul>
			</div>
		</div>
		<div class="col-md-12" ng-view></div>
	</div>
@stop

@section('post-script')
	<script src="/js/dash/dash.js"></script>
@stop