Vue.directive('establecimiento', {
    bind: function () {
        var vm = this.vm;
        var key = this.expression;
        $(this.el).select2({
            placeholder: 'Selección de establecimiento',
            allowClear: true
        });
        $(this.el).on('change', function(){
            var mid = $('#establecimientos option:selected').val();
            vm.$set(key, mid);
        });
    }
});

Vue.directive('estado', {
    bind: function () {
        var vm = this.vm;
        var key = this.expression;
        $(this.el).select2({
            placeholder: 'Selección de estado de encomiendas',
            allowClear: true
        });
        $(this.el).on('change', function(){
            var mid = $('#estado option:selected').val();
            vm.$set(key, mid);
        });
    }
});

var v = new Vue({
    el: '#reportes-entrega',

    ready: function(){
        this.getShipments(this.fecha);
    },

    data: {
        rows: [],
        remitentes:[],
        fecha : '',
        establecimiento_id: 0,
        estado_id : 0,
        sortKey: '',
        reverse: false,
        inicio: '',
        final: '',
        message: 'Eliga los parametros de busqueda',
        registros: ''
    },

    methods: {
        getEstablecimiento: function(){
            this.establecimiento_id = this.establecimiento;
        },

        getEstado: function(){
            this.estado_id = this.estado;
        },

        getShipments: function(fecha) {
            this.$http.get('/reportes/rows-reporte/' + fecha , function (fecha) {
                this.$set('rows', fecha);
            });
        },

        getShipmentsOnClick: function(fecha){
            this.fecha = fecha
            this.$http.get('/reportes/rows-reporte/' + this.fecha, function (data) {
                this.$set('rows', data);
            });
        },

        getQuery: function () {
            var estado = this.estado_id;
            var establecimiento = this.establecimiento_id;
            var fecha = this.fecha;

            this.$http.get('/reportes/rows-reporte/' + fecha + "/" + estado + "/" + establecimiento, function(data){
                this.$set('rows', data, function(){
                    if (this.data === null){
                        this.message = "No hay coincidencias para esta busqueda";
                    }
                });
            });

        },

        sortBy: function(sortKey){
            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            this.sortKey = sortKey;
        }

    }
});