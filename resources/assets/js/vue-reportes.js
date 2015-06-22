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
        this.getShipments(this.inicio, this.final);
    },

    data: {
        rows: [],
        remitentes:[],
        establecimiento_id: 0,
        estado_id : 0,
        sortKey: '',
        reverse: false,
        inicio: '',
        final: '',
        message: 'Eliga los parametros de busqueda',
        registros: '',
        entregados: false
    },

    methods: {
        getEstablecimiento: function(){
            this.establecimiento_id = this.establecimiento;
        },

        getEstado: function(){
            this.estado_id = this.estado;
        },

        getShipments: function(inicio, final) {
            this.$http.get('/reportes/rows-reporte/' + inicio + "/" + final , function (data) {
                this.$set('rows', data);
            });

        },

        getEntregados: function(inicio, final){
            var inicio = this.inicio;
            var final = this.final;
            this.$http.get('/reportes/row-reportes-entregados/' + inicio + "/" + final , function (data) {
                this.$set('rows', data);
            });
            this.entregados = true
        },

        getErrores: function(inicio, final){
            var inicio = this.inicio;
            var final = this.final;
            this.$http.get('/reportes/row-reportes-errores/' + inicio + "/" + final , function (data) {
                this.$set('rows', data);
            });
            this.entregados = true
        },

        getQuery: function () {
            var estado = this.estado_id;
            var establecimiento = this.establecimiento_id;
            var inicio = this.inicio;
            var final = this.final;

            this.$http.get('/reportes/rows-reporte/' + inicio + "/" + final + "/" + estado + "/" + establecimiento, function(data){
                this.$set('rows', data);

                if (estado == 8 || estado == 9 || estado == 10 || estado == 11 || estado == 12  || estado == 13){
                    this.entregados = true
                } else {
                    this.entregados = false
                }
            });

        },

        sortBy: function(sortKey){
            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            this.sortKey = sortKey;
        }

    }
});