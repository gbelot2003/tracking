var elixir = require('laravel-elixir');

elixir(function(mix) {

    mix.copy('bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js', 'resources/assets/js/libs/bootstrap.min.js');
    mix.copy('bower_components/arrive/src/arrive.js', 'resources/assets/js/libs/arrive.js');
    mix.copy('bower_components/select2-dist/dist/js/select2.full.min.js', 'resources/assets/js/libs/select2.full.min.js');
    mix.copy('bower_components/bootstrap-material-design/dist/js/material.min.js', 'resources/assets/js/libs/material.min.js');
    mix.copy('bower_components/bootstrap-material-design/dist/js/ripples.min.js', 'resources/assets/js/libs/ripples.min.js');
    mix.copy('bower_components/underscore/underscore.js', 'resources/assets/js/libs/underscore.js');
    mix.copy('bower_components/moment/moment.js', 'resources/assets/js/libs/moment.js');

    mix.copy('bower_components/select2-dist/dist/css/select2.min.css', 'resources/assets/sass/select2.min.scss');
    mix.copy('bower_components/ngtoast/dist/ngToast.css', 'resources/assets/sass/ngToast.scss');

    mix.copy('bower_components/angular/angular.js', 'resources/assets/js/angular/angular.js');
    mix.copy('bower_components/angular-route/angular-route.js', 'resources/assets/js/angular/angular-route.js');
    mix.copy('bower_components/angular-resource/angular-resource.js', 'resources/assets/js/angular/angular-resource.js');
    mix.copy('bower_components/angular-morph/dist/angular-morph.js', 'resources/assets/js/angular/angular-morph.js');
    mix.copy('bower_components/angular-sanitize/angular-sanitize.min.js', 'resources/assets/js/angular/angular-sanitize.min.js');
    mix.copy('bower_components/angular-ui-select3/src/select3.js', 'resources/assets/js/angular/select3.js');
    mix.copy('bower_components/angular-modal-service/dst/angular-modal-service.min.js', 'resources/assets/js/angular/angular-modal-service.min.js');
    mix.copy('bower_components/ngtoast/dist/ngToast.js', 'resources/assets/js/angular/ngToast.js');

    mix.scripts(['libs/jquery-1.11.3.min.js', 'libs/bootstrap.min.js', 'libs/arrive.js', 'libs/material.min.js', 'libs/ripples.min.js', 'libs/bootbox.min.js',
        'libs/select2.full.min.js', 'libs/flexigrid.js', 'libs/jquery.dataTables.js', 'libs/jquery.colorbox-min.js', 'init.js'], 'public/js/app.js');

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
            'angular/angular.js',
            'angular/angular-sanitize.min.js',
            'angular/angular-route.js',
            'angular/angular-resource.js',
            'angular/angular-morph.js',
            'angular/angular-modal-service.min.js',
            'angular/select3.js',
            'angular/ngToast.js',

            'app/dash.js',
            'app/controllers/dashController.js',
            'app/controllers/bolsas/bolsasController.js',
            'app/controllers/shipments/ShipmentShowController.js',
            'app/controllers/shipments/newShipmentController.js',
            'app/controllers/shipments/modals/NewUserModalController.js',
            'app/controllers/shipments/modals/crearSeccionController.js',
            'app/controllers/shipments/modals/CrearEstablecimientoController.js'

        ], 'public/js/dash/dash.js');
});
