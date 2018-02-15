Highcharts.chart('graf-4', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Česko na prvním místě'
    },
    subtitle: {
        text: 'míra nezaměstnanosti ve vybraných zemích na konci roku 2017 '
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                formatter: function() {
                    if (this.x == "Česká republika" || this.x == "EU 28" || this.x == "Eurozóna" || this.x == "Řecko" || this.x == "Německo") {
                        return this.y + " %";    
                    }
                    
                },
            }
        }
    },
    xAxis: {
        categories:   ["Česká republika", "Japonsko", "Island", "Malta", "Německo", "USA", "Maďarsko", "Norsko", "Nizozemsko", "Británie", "Polsko", "Rumunsko", "Dánsko", "Estonsko", "Rakousko", "Lucembursko", "Švédsko", "Bulharsko", "Irsko", "Slovinsko", "Belgie", "Litva", "EU 28", "Slovensko", "Finsko", "Portugalsko", "Lotyšsko", "Eurozóna", "Francie", "Kypr", "Chorvatsko", "Itálie", "Turecko", "Španělsko", "Řecko"],
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
          enabled: false     
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: true,
        text: 'Zdroj: Eurostat',
        href: 'https://www.google.cz/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiKn8Ko3KXZAhVDzqQKHTnmC-0QFggoMAA&url=http%3A%2F%2Fec.europa.eu%2Feurostat%2Fproduct%3Fmode%3Dview%26code%3Dune_rt_q&usg=AOvVaw2oOAMvEkPz5kM4FoC7zZ-Z'
    },
    series: [{
        name: 'míra nezaměstnanosti',
        data: [2.4, 2.6, 2.8, 3.5, 3.6, 3.9, 4.1, 4.1, 4.3, 4.4, 4.5, 4.8, 5.2, 5.2, 5.5, 5.6, 6, 6.1, 6.1, 6.5, 6.7, 7.2, 7.4, 7.6, 7.6, 8.2, 8.5, 8.8, 9.6, 10, 10.6, 10.6, 10.6, 16.6, 20.3],
        color: '#d52834'
    }]
});