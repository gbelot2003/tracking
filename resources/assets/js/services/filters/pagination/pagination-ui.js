module.exports = function(app){
    app.filter('pagination', function() {
        return function(input, currentPage, pageSize) {
            if(angular.isArray(input)) {
                var start = (currentPage-1)*pageSize;
                var end = currentPage*pageSize;
                return input.slice(start, end);
            }
        };
    });
};