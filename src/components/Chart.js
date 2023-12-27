import { Box } from '@mui/material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

export const Charts = () => {

  const chartData = [
    {
        name: 'Mehar',
        data: [3,3,3,3,3],
      },
     
      // Add more data series as needed
    ];
  
    // Configuration options for the area chart
    const chartOptions = {
      chart: {
        type: 'area',
        height: 300,
        toolbar: {
            show: false, // Set to false to hide the entire toolbar
          },
      },
      xaxis: {
        labels: {
            show: false
          },
        categories: [1,2,3,4,5],
        axisBorder: {
            show: false, // Set to false to hide bottom axis border lines
          },
      },
    
      fill: {
        colors: ['#008FFB'],
        opacity: 0.7,

      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 3, // Set the size of the markers (dots)
        colors:'rgb(208, 8, 8)',
        borderWidth: 5,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
      stroke: {
        curve: 'smooth',
      },
      grid: {
        // Configure grid lines for both x-axis and y-axis
        show: true,
        borderColor: '#e0e0e0', // Set the color of the grid lines
        strokeDashArray: 0, // Set the dash array for dashed grid lines
        position: 'back', // Set the position of the grid lines ('front' or 'back')
        yaxis: {
          lines: {
            show: true, // Set to false to hide vertical grid lines
          },
        },
      },

      yaxis: {
        labels:{
            show:false
        },
        categories: [4,2,1,2,4],
      
      }
    };

  return (
    <Box sx={{ m: '1rem auto', width: '90%' }}>
        <ReactApexChart
        options={chartOptions}
        series={chartData}
        type={chartOptions.chart.type}
        height={170}
        width={280}
      />
    </Box>
  );
};