@if(!Request::ajax())
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>@yield('page-title', 'Sistema de Track')</title>

	<link rel="stylesheet" href="{{ elixir("css/app.css") }}">

	<!-- Fonts -->
	<link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>


</head>
<body>
	@include('partials.nav')
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="row">

					@if($__env->yieldContent('link-button'))

						<div class="col-md-10">
							<h2 class="page-title">@yield('title', 'Sistema de Track')</h2>
						</div>

						<div class="col-md-2">@yield('link-button')</div>

					@else

						<div class="col-md-12">
							<h2 class="page-title">@yield('title', 'Sistema de Track')</h2>
						</div>

					@endif

				</div>

				<div class="breadcrumbs">
					@yield('breadcrumbs')
				</div>
				<div id="content">
					<div class="warp">
						@yield('content')
					</div>

				</div>

			</div>
		</div>
	</div>

	<!-- Scripts -->
	<script src="{{ elixir("js/app.js") }}"></script>
	@yield('post-script')
</body>
</html>
@else
	@yield('content')
@endif



