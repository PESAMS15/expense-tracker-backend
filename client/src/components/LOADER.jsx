import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart2 = ({ currentValue, totalValue }) => {
  const data = {
    labels: ['Amount Paid', 'Remaining'],
    datasets: [
      {
        data: [currentValue, totalValue - currentValue],
        backgroundColor: ['#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className='w-7 h-12'>
        <Doughnut data={data} options={options} />;
    </div>
  )
};

export default DoughnutChart2;