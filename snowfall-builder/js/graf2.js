Highcharts.chart('graf-2', {
    
    chart: {
        type: 'column'
    },
    
    title: {
        text: 'Když ekonomika roste, vznikají nová pracovní místa a nezaměstnanost klesá'
    },

    subtitle: {
        text: 'Změna HDP ve srovnání s předchozím čtvrtletím očištěná o sezónní vlivy'
    },

    yAxis: {
        title: {
            text: '%'
        }
    },
    xAxis: {
        type: 'datetime',
        crosshair: true
    },
    legend: {
    },

    plotOptions: {
        column: {
        zones: [{
            value: 0, 
            color: '#d52834' 
        },{
            color: 'black'
        }]
    },
        series: {
            pointStart: Date.UTC(96,5,1),
            pointIntervalUnit: 'month',
            pointInterval: 3
        }
    },

    tooltip: {
        valueDecimals: 2,
        valueSuffix: ' %'
    },

    credits: {
        href: 'https://www.cnb.cz/cnb/STAT.ARADY_PKG.PARAMETRY_SESTAVY?p_sestuid=29930&p_strid=ACL&p_lang=CS',
        text: 'Zdroj: Česká národní banka'
    },

    series: [{
        name: 'mezičtvrtletní změna HDP',
        data: [0.5,0.4,0.1,-0.1,-0.6,-0.7,-0.2,0.2,0.2,-0.1,0.1,-0.1,0.7,1,1,1.5,1.5,1.3,0.5,0.8,0.5,0.4,0.4,0.1,0.3,0.7,0.8,1.1,0.8,1,1.1,1.3,0.9,1.7,1.9,1.7,1.5,1.5,1.6,2.5,1.9,1.2,1.4,1.6,0.9,1.5,1.3,0.4,0.9,0.2,-1.6,-3.5,-0.7,0.4,0.2,0.7,1,0.5,0.5,0.7,0.2,-0.1,0.2,-0.3,-0.4,-0.5,-0.3,-0.5,0.2,0.3,1.3,-0.3,0.9,1.3,1.3,1.8,1.5,1.2,0.5,0.3,0.8,0.2,0.4,1.5,2.5,0.5],
        color: '#d52834'
    }],

    annotations: [{
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            verticalAlign: 'top',
            y: 15
        },
        labels: [{  point: {
            xAxis: 0,
            yAxis: 0,
            x: Date.UTC(1997,3,15),
            y:-1.1
        },
        text: 'Klausovy "úsporné balíčky"'
    }],
},{ labels: [{
         backgroundColor: 'rgba(255,255,255,0.5)',
    point: {
        xAxis: 0,
        yAxis: 0,
        x: Date.UTC(2004,4,1),
        y:2
    },
    text: 'vstup do EU',
   },
   {backgroundColor: 'rgba(255,255,255,0.5)',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: Date.UTC(2008,8,15),
                y:1.7
            },
            text: 'začíná světová finanční krize',
        } ]
}],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});