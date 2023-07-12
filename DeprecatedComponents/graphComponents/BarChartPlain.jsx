import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChartPlain = () => {
  const series = [
    {
      name: 'Distance <= 1km',
      data: [44, 55, 41, 67, 22, 43, 17]
    },
    {
      name: '1km < Distance <= 2km',
      data: [13, 23, 20, 8, 13, 27, 17]
    },
    {
      name: '2km < Distance <= 3km',
      data: [11, 17, 15, 15, 21, 14, 17]
    },
    {
      name: '3km < Distance <= 5km',
      data: [21, 7, 25, 13, 22, 8, 17]
    }, 
    {
      name: '5km < Distance',
      data: [21, 7, 25, 13, 22, 8, 17]
    }
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 700,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      }
    },
    xaxis: {
      type: 'String',
      categories: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ]
    },
    legend: {
      position: 'right',
      offsetY: 40
    },
    fill: {
      opacity: 1
    }
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={650} />
    </div>
  );
};

export default BarChartPlain;