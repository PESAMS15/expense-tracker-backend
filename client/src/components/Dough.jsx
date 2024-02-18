// DoughnutChart.js
import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js';
import { Doughnut } from 'react-chartjs-2'; // Import Doughnut directly

const DoughnutChart = ({ value1, value2 }) => {
    const chartData = {
      datasets: [
        {
          data: [value1, value2],
          backgroundColor: ['#36A2EB', '#FF6384'], // Colors for each segment
        },
      ],
      labels: ['Value 1', 'Value 2'],
    };
  
    return <Doughnut data={chartData} />;
  };
  

export default DoughnutChart;
