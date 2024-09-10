import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
  const data = {
    labels: [
      '12:00AM', '01:00AM', '02:00AM', '03:00AM', '04:00AM', 
      '05:00AM', '06:00AM', '07:00AM', '08:00AM', '09:00AM', '10:00AM'
    ],
    datasets: [
      {
        label: 'Spend Overview',
        fill: true,
        data: [5000, 4500, 4000, 5500, 5000, 3000, 2000, 3500, 6000, 5500, 5000],
        borderColor: 'rgba(0, 255, 191, 0.8)', // Greenish line color
        backgroundColor: 'rgba(0, 255, 191, 0.2)', // Subtle fill under the line
        pointBackgroundColor: '#ffffff', // White point background
        pointBorderColor: 'rgba(0, 255, 191, 0.8)', // Matches the line
        pointHoverBackgroundColor: '#00ffbf', // Hover state for points
        pointHoverBorderColor: '#ffffff', // White border when hovered
        tension: 0.4, // Smooth curve
        borderWidth: 2, // Slightly thicker line for better visibility
        pointRadius: 5, // Larger points
        pointHoverRadius: 8, // Larger on hover
        pointHitRadius: 12, // Wider hit area for interaction
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000, // Time in milliseconds for the line to be drawn
      easing: 'easeInOutQuad', // Smooth progressive drawing effect
      onProgress: function(animation) {
        console.log(`Animation Progress: ${animation.currentStep / animation.numSteps * 100}%`);
      },
      onComplete: function() {
        console.log('Animation Completed');
      }
    },
    plugins: {
      tooltip: {
        enabled: true, // Tooltips for interactivity
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for tooltips
        titleColor: '#ffffff', // White text for tooltips
        bodyColor: '#ffffff',
        borderColor: 'rgba(0, 255, 191, 0.8)', // Tooltip border to match line
        borderWidth: 1,
      },
      legend: {
        display: false, // Hide legend
      }
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid for a cleaner look
        },
        ticks: {
          color: '#9ca3af', // Light gray for x-axis labels
          maxTicksLimit: 12,
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Subtle y-axis grid
        },
        ticks: {
          color: '#9ca3af', // Light gray for y-axis labels
          beginAtZero: false,
          stepSize: 1000, // Step size between values
          callback: (value) => `$${value.toLocaleString()}`, // Format y-axis labels as currency
        }
      }
    }
  };

  return (
    <div style={{
      position: 'relative', 
      height: '350px', 
      background: 'linear-gradient(145deg, #1e1e1e, #2a2a2a)', // Gradient background for the chart container
      padding: '20px', 
      borderRadius: '15px', 
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' // Soft shadow for depth
    }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
