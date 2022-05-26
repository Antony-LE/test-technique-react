/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import './MainChart.css';

class MainChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: [1950, 1960, 1970, 1980, 1990, 2000, 2010],
        },
        title: {
          text: 'World population',
          align: 'center',
        },
      },
      series: [
        {
          name: 'in Billions',
          data: [30, 40, 45, 50, 49, 60, 70],
        },
      ],
    };
  }

  render() {
    return (
      <div className="mixed-chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="500"
        />
      </div>
    );
  }
}

export default MainChart;
