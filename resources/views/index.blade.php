<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <title>Trackhn Alpha 2</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="css/app.css" type="text/css" rel="stylesheet"/>
</head>

<body>
<toast></toast>
<nav-info></nav-info>
<div class="container">
    <div ng-view></div>
</div>
<script src="js/all.js"></script>
<script src="js/main.min.js"></script>
<script src="http://code.highcharts.com/stock/highstock.src.js"></script>
</body>
</html>