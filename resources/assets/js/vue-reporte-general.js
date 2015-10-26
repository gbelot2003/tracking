
Vue.directive('estado', {
    bind: function () {
        var vm = this.vm;
        var key = this.expression;
        console.log(this.vm);
        $(this.el).select2({
            placeholder: 'Filtro por estado de encomiendas',
            allowClear: true,
            multiple: true
        });
        $(this.el).on('change', function(){
            var mid = new Array;
            $('#estado option:selected').each(function(){
                mid.push($(this).val());
            });
            vm.$set(key, mid);
        });
    }
});

Vue.directive('establecimiento', {
    bind: function () {
        var vm = this.vm;
        var key = this.expression;
        console.log(this.vm);
        $(this.el).select2({
            placeholder: 'Filtro por establecimiento',
            allowClear: true,
            multiple: true
        });
        $(this.el).on('change', function(){
            var mid = new Array;
            $('#establecimientos option:selected').each(function(){
                mid.push($(this).val());
            });
            vm.$set(key, mid);
        });
    }
});

v = new Vue({
    el: '#reportes',
    data:{
        series:[],
        inicio:"",
        final:"",
        estado_id:[],
        establecimiento_id:[],
        dia: true,
        mes: false
    }
});

