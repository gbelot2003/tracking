
/*** Validaciones ***/
var notNumber = (/^\s*(\+|-)?\d+\s*$/);

function validateCode(codigos, termino){

    if(codigos.indexOf(termino)==-1)
       return false
    else
        return true
}

/*** Vue Editar ****/
new Vue({
    el: '#listadosEdit',
    ready: function(){
        this.getShipments(this.url);
    },
    data:{
        shipments:[],
        url: '', // Identificador para querys
        items: [], //Primera lista recuperada de fetchShipments
        nitems :[], //Segunda lista recuparada, cuando se agrega un item nuevo
        codes:'', // Listado de codigos preagregados
        codigos: [],
        num: '',
        ced: []
    },
    computed: {
        completions: function () {
            return this.items.filter(function (items) {
                return items.code;
            });
        }
    },

    filters: {
        codeExist: function (items) {
            return items.filter(function (items) {
                return items.code;
            });
        }

    },

    methods: {
        getShipments: function(url){
            this.$http.get('/listados/contenido-bolsas/' + url, function (items){
                this.$set('items', items);

                this.num = this.items.length;
                for(var i=0; i < this.num; i++) {
                    var sizes = Object.keys(this.items[i].shipments).length;
                    for (e = 0; e < sizes; e++){
                        this.ced.push(this.items[i].shipments[e].code);
                    }
                }
            });
        },

        fetchShipments: function (e) {
            e.preventDefault();
            this.$http.get('/listados/shipments-relacionados/' + this.codes, function (shipments) {

                var cad = shipments[0].code;

                if(validateCode(this.codigos, cad) === true) {
                    alert('El elemento ya existe');
                } else if(validateCode(this.ced, cad) === true) {
                    alert('El elemento ya existe');
                } else {
                    this.$set('shipments', shipments);
                    this.addItem(this.shipments);
                    this.codigos.push(shipments[0].code);
                }

            });
            this.codes = '';
        },

        addItem: function(shipments){
            this.nitems.push(shipments[0]);
        },

        removenitems: function(items){
            this.nitems.$remove(items);
        },

        removeItem: function(items){
            this.items.$remove(items);
        }

    }
});

/*** Vue Editar ****/
new Vue({
    el: '#listados',
    data:{
        shipments:[],
        items: [],
        codes:'',
        codigos: [],
        eidos: ''
    },

    computed: {
        completions: function () {
            return this.items.filter(function (items) {
                return items.code;
            });
        }
    },

    filters: {
        codeExist: function (items) {
            return items.filter(function (items) {
                return items.code;
            });
        }

    },

    methods: {
        fetchShipments: function (e) {
            e.preventDefault();
            this.$http.get('/listados/shipments-relacionados/' + this.codes, function (shipments) {
                var cod = shipments[0].code;
                if(validateCode(this.codigos, cod) === true){
                    alert('El elemento ya existe');
                } else {
                    this.$set('shipments', shipments);
                    this.addItem(this.shipments);
                    this.codigos.push(shipments[0].code);
                }

            });
            this.codes = '';
        },

        addItem: function(shipments){
                this.items.push(shipments[0]);
        },

        removeItem: function(items){
            this.items.$remove(items);
        }
    }
});