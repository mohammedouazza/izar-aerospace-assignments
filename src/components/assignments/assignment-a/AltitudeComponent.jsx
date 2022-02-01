import React from "react";
import { Card } from "react-bootstrap";
import Highcharts from "highcharts/highcharts.js";
import HighchartsReact from "highcharts-react-official";

function AltitudeComponent({ altitude, altitudeArr }) {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    yAxis: {
      min: 0,
      title: {
        text: "Altitude",
      },
      labels: {
        overflow: "justify",
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "top",
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
      shadow: true,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        data: altitudeArr,
      },
    ],
  };
  return (
    <Card className="text-center">
      <Card.Header className=" display-5">Altitude</Card.Header>
      <Card.Body>
        <Card.Text className="display-1">
          <HighchartsReact highcharts={Highcharts} options={options} />
          {(altitude / 1000).toFixed(2)} km
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AltitudeComponent;
