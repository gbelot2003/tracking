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

/**
 *
 * @type {Vue}
 */
var v = new Vue({
    el: '#reportes-usuarios',
    ready: function(){
        this.getShipmentsUsers(this.userId, this.inicio, this.final);
    },

    data: {
        rows: [],
        userId: '',
        estado_id: '0',
        inicio: '',
        final: ''
    },

    methods:{
        getShipmentsUsers: function(id, fecha1, fecha2){
            this.$http.get('/reportes/reportes-usuarios-rows/' + id + "/" + fecha1 + "/" + fecha2).success(function(data){
                this.$set('rows', data);
                $('#loader').fadeOut(2000);
            })
        },

        getShipmentsUsersStates: function(id, fecha1, fecha2, state){
            if(state == 0 || state == NaN || state == null){
                state = 0
            }
            $('#loader').show();
            this.$http.get('/reportes/reportes-usuarios-states-rows/' + id + "/" + fecha1 + "/" + fecha2 + "/" +  state).success(function(data){
                this.$set('rows', data);
                $('#loader').fadeOut(2000);
            });

        }
    }
});