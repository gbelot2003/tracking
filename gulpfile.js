var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy('bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'resources/assets/js/bootstrap.min.js');
    mix.copy('bower_components/arrive/src/arrive.js', 'resources/assets/js/arrive.js');
    mix.copy('bower_components/select2-dist/dist/js/select2.full.min.js', 'resources/assets/js/select2.full.min.js');
    mix.copy('bower_components/select2-dist/dist/css/select2.min.css', 'resources/assets/sass/select2.min.scss');
    mix.copy('bower_components/bootstrap-material-design/dist/js/material.min.js', 'resources/assets/js/material.min.js');
    mix.copy('bower_components/bootstrap-material-design/dist/js/ripples.min.js', 'resources/assets/js/ripples.min.js');
    mix.scripts(['jquery-1.11.3.min.js', 'bootstrap.min.js', 'arrive.js', 'material.min.js', 'ripples.min.js', 'select2.full.min.js', 'init.js', 'flexigrid.js' , 'jquery.dataTables.js'], 'public/js/app.js')
});

elixir(function(mix) {
    mix.sass('app.scss');
    mix.version(["css/app.css", "js/app.js"]);
});
