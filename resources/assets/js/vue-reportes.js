function getTime(date1, date2){
    var time1 =  new Date(date1).getTime();
    var time2 = new Date(date2).getTime();

    // get total seconds between the times

    var delta = Math.abs(time2 - time1) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var result = days + ' días, ' + hours + " horas, " + minutes + " minutos";

    return result;

}

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
        entregados: false,
        fecha1: [],
        fecha2: [],
        fecha: [],
        num: ''
    },

    methods: {
        getEstablecimiento: function(){
            this.establecimiento_id = this.establecimiento;
        },

        getEstado: function(){
            this.estado_id = this.estado;
        },

        getShipments: function(inicio, final) {

            this.$http.get('/reportes/rows-reporte/' + inicio + "/" + final).success(function(data){
                this.$set('rows', data);
                $('#loader').fadeOut(2000);
            });
        },

        getEntregados: function(inicio, final){
            var inicio = this.inicio;
            var final = this.final;
            $('#loader').show();
            this.$http.get('/reportes/row-reportes-entregados/' + inicio + "/" + final)
                .success(function(data){
                    this.$set('rows', data);
                    this.num = this.rows.length;
                    for(var i=0; i < this.num; i++) {
                        this.fecha1 = this.rows[i].created_at;
                        this.fecha2 = this.rows[i].updated_at;
                        this.rows[i].differ = getTime(this.fecha1, this.fecha2);

                    }
                    $('#loader').fadeOut(2000);

                });
            this.entregados = true

        },

        getErrores: function(inicio, final){
            var inicio = this.inicio;
            var final = this.final;
            $('#loader').show();
            this.$http.get('/reportes/row-reportes-errores/' + inicio + "/" + final , function (rows) {
                this.$set('rows', rows);
            }).success(function(data){
                $('#loader').fadeOut(2000);
            });
            this.entregados = true
        },

        getQuery: function () {
            var estado = this.estado_id;
            var establecimiento = this.establecimiento_id;
            var inicio = this.inicio;
            var final = this.final;
            $('#loader').show();

            this.$http.get('/reportes/rows-reporte/' + inicio + "/" + final + "/" + estado + "/" + establecimiento).success(function(rows){
                this.$set('rows', rows);
                if (estado == 8 || estado == 9 || estado == 10 || estado == 11 || estado == 12  || estado == 13){
                    this.entregados = true
                } else {
                    this.entregados = false
                }
                $('#loader').fadeOut(2000);
            });

        },

        sortBy: function(sortKey){
            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            this.sortKey = sortKey;
        }

    }
});