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

Vue.filter('limit', function (limit, offset)
{
    if(limit > 10){
        return 10 + 2;
    } else{
        return limit;
    }
});



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

v = new Vue({
    el:'#reportes',
    data: {
        inicio: '',
        final: '',
        establecimiento_id: 0,
        currentPage: 0,
        itemsPerPage: 50,
        resultCount: 0,
        totalPage: 0,
        pagerLimit: 5,
        rows:[]
    },

    ready: function(){
        this.getShipments();
    },

    methods: {
        getShipments: function(page){
            inicio = this.inicio;
            final = this.final;
            this.$http.get('/consultas/reportes/reporte-general/' + inicio + "/" + final + "/" + page).success(function(data){
                this.$set('rows', data.items);
                this.$set('resultCount', data.resultCount);
                this.$set('itemsPerPage', data.itemsPerPage);
                this.setTotalPage();
            });
        },

        //****** paginación ************************/
        /*******************************************/

        setPage: function(pageNumber) {
            this.currentPage = pageNumber;
            var spage = (pageNumber + 1);
            this.getShipments(spage);
        },

        setTotalPage: function(){
            this.totalPage = Math.ceil(this.resultCount / this.itemsPerPage);
        }
    }
});