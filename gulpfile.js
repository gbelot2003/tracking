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
    mix.copy('bower_components/underscore/underscore.js', 'resources/assets/js/underscore.js');
    mix.copy('bower_components/moment/moment.js', 'resources/assets/js/moment.js');

    mix.copy('bower_components/angular/angular.js', 'resources/assets/js/app/angular.js');
    mix.copy('bower_components/angular-route/angular-route.js', 'resources/assets/js/app/angular-route.js');
    mix.copy('bower_components/angular-resource/angular-resource.js', 'resources/assets/js/app/angular-resource.js');
    mix.copy('bower_components/angular-morph/dist/angular-morph.js', 'resources/assets/js/app/angular-morph.js');
    mix.copy('bower_components/angular-sanitize/angular-sanitize.min.js', 'resources/assets/js/app/angular-sanitize.min.js');
    mix.copy('bower_components/angular-ui-select3/src/select3.js', 'resources/assets/js/app/select3.js');
    mix.copy('bower_components/angular-modal-service/dst/angular-modal-service.min.js', 'resources/assets/js/app/angular-modal-service.min.js');


    mix.scripts(['jquery-1.11.3.min.js', 'bootstrap.min.js', 'arrive.js', 'material.min.js', 'ripples.min.js', 'bootbox.min.js',
        'select2.full.min.js', 'flexigrid.js', 'jquery.dataTables.js', 'jquery.colorbox-min.js', 'init.js', 'myscripts.js'], 'public/js/app.js');

    mix.scripts(['jquery-1.11.3.min.js', 'bootstrap.min.js', 'arrive.js', 'material.min.js', 'ripples.min.js', 'bootbox.min.js',
            'select2.full.min.js', 'flexigrid.js', 'jquery.dataTables.js', 'jquery.colorbox-min.js', 'wow.min.js', 'materialbox.js', 'trackhn.js', 'init.js', 'myscripts.js'],
        'public/js/wapp.js');

    /**
     * js scripts
     */
    mix.scripts(['forms.js'], 'public/js/forms.js');
    mix.scripts(['bolsas.js'], 'public/js/bolsas.js');
    mix.scripts(['underscore.js'], 'public/js/underscore.js');
    mix.scripts(['moment.js'], 'public/js/moment.js');

    /**
     *  vuejs old scripts
     */
    mix.scripts(['vue.js', 'vue-resource.js', 'myvue.js'], 'public/js/vue.js');
    mix.scripts(['vue.js', 'vue-resource.js', 'vue-reportes.js'], 'public/js/vue-reports.js');
    mix.scripts(['vue.js', 'vue-resource.js', 'vue-reportes-usuarios.js'], 'public/js/vue-reportes-usuaios.js');
    mix.scripts(['vue.js', 'vue-resource.js', 'vue-reporte-general.js'], 'public/js/vue-reporte-general.js');
    mix.scripts(['vue.js', 'vue-resource.js', 'vue/app.js'], 'public/js/app/vue-app.js');

    /**
     * Sass scripts
     */
    mix.sass('app.scss');
    mix.sass('colorbox.scss');
    mix.sass('trackhn.scss');
    mix.sass('jquery-ui-styles.scss');

});

elixir(function(mix){
    mix.copy('resources/assets/js/app/views', 'public/js/dash/views/');

    mix.scripts(
        [
            'app/angular.js',
            'app/angular-sanitize.min.js',
            'app/angular-route.js',
            'app/angular-resource.js',
            'app/angular-morph.js',
            'app/select3.js',
            'app/dash.js',
            'app/angular-modal-service.min.js',

            'app/controllers/dashController.js',
            'app/controllers/ShipmentShowController.js',
            'app/controllers/newShipmentController.js',
            'app/controllers/modals/NewUserModalController.js',
            'app/controllers/modals/CrearEstablecimientoController.js',
            'app/controllers/bolsasController.js'

        ], 'public/js/dash/dash.js');
});
