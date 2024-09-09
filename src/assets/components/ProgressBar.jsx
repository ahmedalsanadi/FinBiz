// Import necessary dependencies
import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data = (progress) => ({
  labels: [''],
  datasets: [
    {
      label: '',
      data: [progress],
      backgroundColor: '#888', // Bar color
    },
  ],
});

const options = {
  indexAxis: 'y', // Horizontal bar
  scales: {
    x: {
      max: 100, // Max progress value
      display: false, // Hide X-axis
    },
    y: {
      display: false, // Hide Y-axis
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
  responsive: true,
  maintainAspectRatio: false, // Allows the chart to adjust based on container size
};

const ProgressBar = ({ label, progress }) => {
  return (
    <div className="p-4 bg-darkGray rounded-lg mb-4">
      <div className="text-white text-lg mb-2">{label}</div>
      <div style={{ width: '100%', height: '20px' }}>
        <Bar data={data(progress)} options={options} />
      </div>
    </div>
  );
};

export default ProgressBar;
