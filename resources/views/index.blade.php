<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <title>Anguilar & webpack</title>
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
<script src="js/main.min.js"></script>
</body>
</html>