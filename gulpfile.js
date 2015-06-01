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
    mix.scripts(['jquery-1.11.3.min.js', 'bootstrap.min.js', 'arrive.js', 'material.min.js', 'ripples.min.js', 'bootbox.min.js',
                 'select2.full.min.js', 'flexigrid.js' , 'jquery.dataTables.js', 'init.js', 'myscripts.js'], 'public/js/app.js')
    mix.scripts(['forms.js'], 'public/js/forms.js');


});

elixir(function(mix){
    mix.copy('bower_components/angular/angular.min.js', 'resources/assets/js/angular.min.js');
    mix.scripts(['angular.min.js', 'app/app-angular.js'], 'public/js/angular.js');
});

elixir(function(mix) {
    mix.sass('app.scss');
});
