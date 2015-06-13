new Vue({
    el: '#listados',
    ready: function(){
        this.fetchMessages();
    },
    data:{
        items: [],
        selected: '',
        SelectKey: '',
        sortKey: '',
        reverse: false
    },
    computed:{
        completions: function(){
            return this.items.filter(function(items){
                return items.completed;
            });
        },

        noCompleted: function(){
            return this.items.filter(function(items){
                return ! items.completed;
            });
        }
    },
    filters: {
        noProcess: function (items) {
            return items.filter(function (items) {
                return ! items.completed;
            });
        },

        itemsProcess: function (items){
            return items.filter(function (items) {
                return items.completed;
            })
        }

    },
    methods: {

        fetchMessages: function () {
            this.$http.get('/listados/contenido-bolsas/', function (items) {
                this.$set("items", items);
                var mlen = this.items.length;
                for (i = 0; i < mlen; i++) {
                    items[i].completed = false;
                };
            });
        },

        removeItem: function(items){
            this.items.$remove(items);
        },

        toggleItemCompletion: function(item){
            this.items.push({
                id:item.id,
                code: item.code,
                name: item.name,
                establecimientoid: item.establecimientoid,
                created_at: item.created_at,
                completed: false
            });
            this.removeItem(item);
        },

        addItem: function(item){
            this.items.push({
                id:item.id,
                code: item.code,
                name: item.name,
                establecimientoid: item.establecimientoid,
                created_at: item.created_at,
                completed: true
            });
            this.removeItem(item);
        },

        completeAll: function(items){
            items.forEach(function(item){
                item.completed = true;
            })
        },

        sortBy: function(sortKey) {
            this.reverse = (this.sortKey == sortKey) ? ! this.reverse : false;
            this.sortKey = sortKey;
        },

    }
});