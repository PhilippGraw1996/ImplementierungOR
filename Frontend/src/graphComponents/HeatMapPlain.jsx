import React from 'react';
import ReactApexChart from 'react-apexcharts';
import generateData  from '../utilities/generateDataFunction'; // Annahme: Funktion zum Generieren von Daten

const HeatMapPlain = () => {
  const series = [
    {
      name: 'Metric1',
      data: generateData(7, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric2',
      data: generateData(7, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric3',
      data: generateData(7, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric4',
      data: generateData(7, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'Metric5',
      data: generateData(7, {
        min: 0,
        max: 90
      })
    }
  ];

  const options = {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    title: {
      text: 'HeatMap Chart (Single color)'
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="heatmap" height={650} />
    </div>
  );
};

export default HeatMapPlain;