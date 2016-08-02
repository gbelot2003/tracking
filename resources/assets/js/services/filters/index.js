module.exports = function(app){
    require('./select-ui/propsFilter')(app);
    require('./pagination/pagination-ui')(app);
};