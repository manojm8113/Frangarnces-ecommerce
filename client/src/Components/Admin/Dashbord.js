import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Sidebar from './Sidebar';
import './Dashbord.css';
const Dashbord = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Revenue',
          data: [1000, 5000, 2000, 18000, 22000, 25000, 28000],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    return () => {
      myChart.destroy();
    };
  }, []);
  return (
    <div>
    <Sidebar/>
    <div className='col-md-6'>
    <div className='container' id='charts'>
      <canvas ref={chartRef} />
      </div>
    </div>
   
    </div>
  );
};
export default Dashbord;
