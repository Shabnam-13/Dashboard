//Chart.js Circle Chart
var data = {
    datasets: [{
        data: [30, 15, 15],
        backgroundColor:[
            'rgb(42, 118, 244)',
            'rgba(42, 118, 244, 0.5)',
            'rgba(42, 118, 244, 0.18)'
        ],
        borderWidth:0.5

    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Mobile',
        'Tablet',
        'Desktop'
    ],
};

var options = {
    legend: {
        display: true,
        position: 'bottom'
    }
};

var ctx = document.getElementById('myChart');

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options:options
});

//MDB Line Chart
const dataLine = {
  type: "line",
  height:250,
  maxWidth:100,
  options:{
    legend:{
        text:'right'
    },
    elements:{
        // point:{
        //     radius:0
        // }
    },
    scales:{
        yAxes:[{
            gridLines:{
                borderDash: [4, 3],
                color: "rgba(139, 145, 169, 0.2)"
            },
            ticks:{
                stepSize:60,
                suggestedMin: 0,
                suggestedMax: 300
            }
        }],
        xAxes:[{
            gridLines:{
                display:false            
            },
        }]
    },
    responsive:true,
  },
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
    {
        borderDash:[5,2],
        label: "New Visits",
        data: [0, 100, 30, 160, 90, 195, 80, 240, 70, 200, 150, 220],
        borderColor: "rgb(165, 194, 241)",
        backgroundColor: "rgb(165, 194, 241)",
        fill: false,
        borderWidth:1
    }, 
    {
        label: "Unique Visits",
        data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 120],
        borderColor: "rgb(42, 119, 244)",
        backgroundColor: "rgb(42, 119, 244)",
        fill: false,
        borderWidth:1.5
    },
],
  },
};
var lineChart = new Chart(document.getElementById("chart-line"), dataLine);

//ApexChart.js Line Chart
var options={
    chart:{
        height:250,
        type:"line",
        stacked:false,
        toolbar:{
            show:false
        },
        zoom:{
            show:false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: [0, 1, 2],
            top: 30,
            left: 0,
            blur: 25,
            color: 'rgb(42, 119, 244)',
            opacity: 0.8
        }
    },
    dataLabels:{
        enabled:false
    },
    colors:["rgb(165, 194, 241)","rgb(42, 119, 244)"],
    series:[{
        name:["New Visits"],
        data: [0, 100, 30, 160, 90, 195, 80, 240, 70, 200, 150, 220],
        borderColor: "rgb(42, 119, 244)",
        backgroundColor: "rgb(42, 119, 244)",
    },
    {
        name:["Unique Visits"],
        data: [0, 60, 20, 90, 45, 110, 55, 130, 44, 110, 75, 120],
        borderColor: "rgb(42, 119, 244)",
        backgroundColor: "rgb(42, 119, 244)"
    }
],
    stroke:{
        width:[1, 1],
        curve:'smooth',
        dashArray: [5, 0]
    },
    plotOptions: {
        bar: {
          columnWidth: "20%"
        }
    },
    grid:{
        borderColor: '#dee2e6',
        strokeDashArray: 4,
        width:0.5
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Arp", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: [
        {
          axisTicks: {
            show: true,
          },
          labels: {
            style: {
              colors: "#7081b9"
            }
          },
        },
    ],
    legend: {
        horizontalAlign: "right",
        verticalAlign:"top",
        offsetX: 40
    }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

//MDB Bar Chart
const dataLine1 = {
    type: "bar",
    options:{
      legend:{
          display:false
      },
      scales:{
          yAxes:[{
              gridLines:{
                  borderDash: [4, 3],
                  color: "rgba(139, 145, 169, 0.2)"
              },
              ticks:{
                suggestedMin: 0
            },
            label:{
                display:false
            }
          }],
          xAxes:[{
              gridLines:{
                  display:false,
                  barPercentage: 0.4,
                  barThickness: 5           
                },
          }]
      },
      responsive:true,
    },
    data: {
        labels: ["Email", "Referral", "Organicar", "Direct","Compaign"],
        datasets: [
      {
        borderWidth: 0.5,
        data:[4, 10.1, 6, 8, 9.1],
        borderColor: ["rgba(152, 231, 223, 0.85)","rgba(184, 196, 208, 0.85)",
        "rgba(190, 199, 250, 0.85)","rgba(255, 226, 163, 0.85)","rgba(146, 230, 240, 0.85)"],
        backgroundColor: ["rgba(152, 231, 223, 0.85)","rgba(184, 196, 208, 0.85)",
        "rgba(190, 199, 250, 0.85)","rgba(255, 226, 163, 0.85)","rgba(146, 230, 240, 0.85)"],
        fill: false
      }, 
  ],
    },
  };
  var barChart = new Chart(document.getElementById("myBar"), dataLine1);