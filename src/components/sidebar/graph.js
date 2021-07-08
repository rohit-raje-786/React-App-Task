import React, { useState } from 'react';

import { Line } from 'react-chartjs-2';

export default function Graph({ from, to, country, values }) {
  const [chartData, setChartData] = useState({});

  React.useEffect(() => {
    chart();
  }, [from, to, country, values]);

  const chart = () => {
    console.log(from, to, values);
    let labels = [];
    for (let i = from; i <= to; i++) {
      labels.push(i);
    }

    setChartData({
      labels: labels,
      datasets: [
        {
          label: country,
          data: values,
          backgroundColor: ['rgba(75, 192, 192, 0.6)'],
          borderWidth: 4,
        },
      ],
    });
  };

  return (
    <>
      {/* <canvas id="bar-chart"></canvas> */}
      <Line
        width={600}
        height={500}
        data={chartData}
        options={{
          responsive: true,
          title: { text: 'THICCNESS SCALE', display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 2,
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </>
  );
}
