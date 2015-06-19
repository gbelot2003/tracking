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
        'select2.full.min.js', 'flexigrid.js', 'jquery.dataTables.js', 'jquery.colorbox-min.js', 'init.js', 'myscripts.js'], 'public/js/app.js');;

    mix.scripts(['jquery-1.11.3.min.js', 'bootstrap.min.js', 'arrive.js', 'material.min.js', 'ripples.min.js', 'bootbox.min.js',
            'select2.full.min.js', 'flexigrid.js', 'jquery.dataTables.js', 'jquery.colorbox-min.js', 'wow.min.js', 'materialbox.js', 'trackhn.js', 'init.js', 'myscripts.js'],
        'public/js/wapp.js');;

    mix.scripts(['forms.js'], 'public/js/forms.js');
    mix.scripts(['bolsas.js'], 'public/js/bolsas.js');
});

elixir(function(mix){
    mix.scripts(['vue.js', 'vue-resource.js', 'myvue.js'], 'public/js/vue.js');
    mix.scripts(['vue.js', 'vue-resource.js', 'vue-reportes.js'], 'public/js/vue-reports.js');
    mix.scripts('jquery-ui.js');
});

elixir(function(mix) {
    mix.sass('app.scss');
    mix.sass('colorbox.scss');
    mix.sass('trackhn.scss');
    mix.sass(['jquery-ui.scss', 'jquery-ui.structure.scss', 'jquery-ui.theme.scss'], 'public/css/jquery-ui.css');
});
