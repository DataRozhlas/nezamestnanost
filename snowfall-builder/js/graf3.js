Highcharts.chart('graf-3', {
    
    
    title: {
        text: 'Co nejvíc brání dalšímu růstu vaší firmy? (1=vůbec, 5=nejvíc)'
    },
    subtitle: {
        text: 'Výsledky statistického šetření ČNB v nefinančních podnicích'
    },

    yAxis: {
        title: {
            text: 'průměr ze všech odpovědí'
        }
    },
    xAxis: {
        type: 'datetime',
        crosshair: true
    },
    legend: {
    },

    plotOptions: {
        series: {
                marker: {
                    enabled: false
                },             
            pointStart: Date.UTC(2011,2,1),
            pointIntervalUnit: 'month',
            pointInterval: 3
        }
    },

    tooltip: {
        valueDecimals: 1,
        split: true
    },

    credits: {
        href: 'https://www.cnb.cz/cnb/STAT.ARADY_PKG.PARAMETRY_SESTAVY?p_sestuid=18953&p_strid=ACAA&p_lang=CS',
        text: 'Zdroj: Česká národní banka'
    },

    series: [{
        name: 'nedostatek kvalifikované pracovní síly',
        data: [2.4,2.5,2.5,2.4,2.4,2.4,2.5,2.5,2.5,2.5,2.5,2.6,2.7,2.6,2.7,2.8,2.8,2.9,3,3.1,3.1,3.3,3.4,3.4,3.5,3.6,3.6,3.7],
        color: '#d52834'
    }, {
        name: 'nedostatečná poptávka tuzemsko',
        data: [3.5,3.7,3.5,3.5,3.7,3.6,3.7,3.7,3.6,3.6,3.6,3.5,3.6,3.6,3.6,3.6,3.6,3.6,3.5,3.5,3.5,3.5,3.4,3.5,3.6,3.5,3.5,3.5],
        color: '#a6cee3',
        visible: false
    }, {
        name: 'nedostatečná poptávka zahraničí',
        data: [3.2,3,3.1,3.2,3.1,3.2,3.2,3.3,3.3,3.3,3.3,3.2,3.3,3.3,3.4,3.3,3.4,3.3,3.2,3.2,3.2,3.2,3.2,3.3,3.3,3.4,3.4,3.3],
        color: '#1f78b4',
        visible: false
    }, {
        name: 'nedostatek financí',
        data: [2.5,2.4,2.4,2.4,2.4,2.5,2.5,2.6,2.6,2.7,2.7,2.7,2.8,2.7,2.8,2.8,2.8,2.8,2.7,2.8,2.8,2.8,2.8,2.8,2.8,2.8,2.9,2.8],
        color: '#b2df8a',
        visible: false
    }, {
        name: 'druhotná platební neschopnost',
        data: [2,2,2,2.1,2.2,2.2,2.2,2.2,2.2,2.1,2.2,2.2,2.2,2.1,2.2,2.2,2.1,2.2,2.2,2.2,2.2,2.2,2.2,2.3,2.3,2.2,2.3,2.2],
        color: '#33a02c',
        visible: false
    }, {
        name: 'ceny materiálů a surovin',
        data: [3.3,3.4,3.4,3.5,3.6,3.6,3.6,3.5,3.7,3.6,3.6,3.7,3.7,3.6,3.6,3.6,3.7,3.6,3.6,3.6,3.6,3.7,3.6,3.6,3.6,3.6,3.6,3.6],
        color: '#fb9a99',
        visible: false
    }, {
        name: 'ceny energie',
        data: [3.2,3.4,3.4,3.5,3.5,3.6,3.6,3.6,3.6,3.6,3.5,3.5,3.5,3.5,3.5,3.4,3.5,3.4,3.4,3.3,3.4,3.3,3.2,3.3,3.3,3.3,3.2,3.3],
        color: '#fdbf6f',
        visible: false
    }, {
        name: 'vysoké náklady na práci',
        data: [2.8,2.8,2.8,2.9,2.8,2.9,3,3,3,3,3,3,3.1,3.1,3.1,3.1,3.2,3.2,3.2,3.2,3.3,3.3,3.3,3.3,3.3,3.4,3.4,3.4],
        color: '#ff7f00',
        visible: false
    }, {
        name: 'konkurence',
        data: [3.4,3.5,3.4,3.5,3.5,3.5,3.6,3.5,3.6,3.6,3.6,3.6,3.7,3.8,3.8,3.8,3.7,3.7,3.8,3.8,3.7,3.7,3.7,3.7,3.7,3.7,3.7,3.6],
        color: '#cab2d6',
        visible: false
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