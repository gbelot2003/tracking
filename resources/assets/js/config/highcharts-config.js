module.exports = function(app) {
    app.config(['chartConfig', function(chartConfig){
        chartConfig.configure({
            options: {
                    //This is the Main Highcharts chart config. Any Highchart options are valid here.
                    //will be overriden by values specified below.
                    chart: {
                        type: 'bar'
                    },
                    tooltip: {
                        style: {
                            padding: 10,
                            fontWeight: 'bold'
                        }
                    }
            }
        });
    }]);
};
