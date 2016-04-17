<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta http-equiv="X-UA-COMPATIBLE" content="IE=edge,chrome=1">
    <meta name="fragment" content="!">
    <base href="/"/>

    <meta name="viewport" content="width=device-width,initial-scale=1,maximun-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <title>Anguilar & webpack</title>
    <!-- change this up! http://www.bootstrapcdn.com/bootswatch/ -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="/css/angular-material.min.css" type="text/css" rel="stylesheet"/>
</head>

<body>
<div class="container">
    <nav>
        <nav-info></nav-info>
    </nav>
    <div ng-view></div>
</div>
<script src="js/main.min.js"></script>
</body>
</html>