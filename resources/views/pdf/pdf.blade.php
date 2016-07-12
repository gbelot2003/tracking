<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>@yield('page-title', 'TrackHn - Sistema de rastreo de paqueteria ,mensajeria y correspondencia.')</title>
	<link rel="stylesheet" href="{{ URL::asset("css/app.css") }}" media="print">
	<style>
		.resalta {
			font-weight: bold;
		}

		table {
			border-collapse: collapse;
		}

		table, th, td {
			border: 1px solid black;
		}
		th {
			text-align: left;
		}
		th, td {
			padding: 2px;
			text-align: left;
		}
		tr:nth-child(even) {background-color: #f2f2f2}
	</style>
	<!-- Fonts -->
	<link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>
</head>
<body>
<div id="content" class="container">
	<div class="row">
		<div class="col-md-12">
			@yield('content')
		</div>
	</div>
</div>
</body>