import React from "react";
import { Card } from "react-bootstrap";
import Highcharts from "highcharts/highcharts.js";
import HighchartsReact from "highcharts-react-official";

function TemperatureComponent({ temp, temperatureArr }) {
  const options = {
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: "Temperature",
      },
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 0,
      },
    },

    series: [
      {
        data: temperatureArr,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 300,
            maxHeight: 100,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <Card className="text-center">
      <Card.Header className=" display-5">Temperature</Card.Header>
      <Card.Body>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <Card.Text className="display-1">{temp.toFixed(2)}°</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TemperatureComponent;
