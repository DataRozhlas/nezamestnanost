Highcharts.setOptions({
    lang: {
        months: [
            'leden', 'únor', 'březen', 'duben',
            'květen', 'červen', 'červenec', 'srpen',
            'září', 'říjen', 'listopad', 'prosinec'
        ],
        shortMonths: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
        weekdays: [
            'neděle', 'pondělí', 'úterý', 'středa',
            'čtvrtek', 'pátek', 'sobota'
        ],
        decimalPoint: ','
    }
});

/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $prior_appeared = [];

  function appeared(selector) {
    return $(selector).filter(function() {
      return $(this).is(':appeared');
    });
  }

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = appeared(selectors[index]);

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  }

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }

  // "appeared" custom filter
  $.expr[':'].appeared = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      add_selector(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(function() {
  if (typeof module !== 'undefined') {
    // Node
    return require('jquery');
  } else {
    return jQuery;
  }
}());


(function (H) {
    function deferRender (proceed) {
        var series = this, 
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
            
        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };
    
    H.wrap(H.Series.prototype, 'render', deferRender);
    
}(Highcharts));


var graf1 = Highcharts.chart('graf-1', {
    
    
    title: {
        text: 'Tak málo nezaměstnaných v České republice ještě nikdy nebylo'
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
        series: {
                marker: {
                    enabled: false
                },
                animation: {
                duration: 2200
                    },
                dataLabels: {
                enabled: true,
                filter: {
                    property: 'y',
                    operator: '<',
                    value: 2.4
                },
                align: 'left',
                y: 11,
                x: -10,
                format: '{point.y:.2f} %'
            },
            pointStart: Date.UTC(93,2,1),
            pointIntervalUnit: 'month',
            pointInterval: 3
        }
    },

    tooltip: {
        valueDecimals: 2,
        valueSuffix: ' %'
    },

    credits: {
        href: 'https://vdb.czso.cz/vdbvo2/',
        text: 'Zdroj: Veřejná databáze ČSÚ'
    },

    series: [{
        name: 'obecná míra nezaměstnanosti 15 - 64letých',
        data: [4.5321,4.2677,4.3125,4.1692,4.2267,4.1931,4.4591,4.3053,4.3048,4.0289,4.0458,3.7172,3.7311,3.7795,4.014,4.0507,4.2805,4.4772,5.0043,5.3895,5.9126,5.8884,6.7532,7.255,8.4095,8.434,8.9792,8.9842,9.5053,8.6921,8.5487,8.3073,8.4668,7.9533,8.2468,7.8439,7.6691,6.981,7.2175,7.2562,7.5714,7.5066,7.964,8.0653,8.6683,8.186,8.1831,8.1545,8.359,7.8034,7.7785,7.7716,7.965,7.0631,7.0125,6.5242,6.013,5.2919,5.1202,4.8434,4.7,4.2144,4.2741,4.3833,5.7678,6.3302,7.2906,7.2473,8.0484,7.1293,7.0788,6.873,7.1782,6.7375,6.5547,6.4329,7.0946,6.6978,6.9573,7.1662,7.4434,6.7415,6.9424,6.6889,6.7763,6.033,5.8908,5.7355,5.9632,4.9338,4.8371,4.4596,4.3484,3.9289,3.971,3.5649,3.4485,2.964,2.7751,2.3872],
        color: '#d52834'
    }],

    annotations: [{
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            verticalAlign: 'top',
            y: 15
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: Date.UTC(2008,8,15),
                y:4.1
            },
            text: 'začíná světová finanční krize',
        }, {  point: {
            xAxis: 0,
            yAxis: 0,
            x: Date.UTC(1997,3,15),
            y:3.7
        },
        text: 'Klausovy "úsporné balíčky"'
    }],
},{ labels: [{
         backgroundColor: 'rgba(255,255,255,0.5)',
    point: {
        xAxis: 0,
        yAxis: 0,
        x: Date.UTC(2004,4,1),
        y:8.85
    },
    text: 'vstup do EU',
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

graf1.series[0].data[99].setState('hover');

document.getElementById('graf-1').addEventListener('mouseenter', function() {
    graf1.series[0].data[99].setState();
});

document.getElementById('graf-1').addEventListener('mouseleave', function() {
    graf1.series[0].data[99].setState('hover');
});