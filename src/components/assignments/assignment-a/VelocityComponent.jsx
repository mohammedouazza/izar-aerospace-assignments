import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Highcharts from "highcharts/highcharts.js";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import HighchartsReact from "highcharts-react-official";

highchartsMore(Highcharts);
solidGauge(Highcharts);

function VelocityComponent({ veloctity }) {
  const velX = veloctity.x || veloctity.X;
  const velY = veloctity.y || veloctity.Y;
  const velZ = veloctity.z || veloctity.Z;

  const vx = (veloctity.x || veloctity.X) / (500 * 1000 * 60 * 60);
  const vy = (veloctity.y || veloctity.Y) / (500 * 1000 * 60 * 60);
  const vz = (veloctity.z || veloctity.Z) / (500 * 1000 * 60 * 60);

  const vf = Math.sqrt(vx * vx + vy * vy + vz * vz);

  const options = {
    chart: {
      type: "gauge",
      plotBackgroundColor: null,
      plotBackgroundImage: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    pane: {
      startAngle: -150,
      endAngle: 150,
      background: [
        {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#FFF"],
              [1, "#333"],
            ],
          },
          borderWidth: 0,
          outerRadius: "109%",
        },
        {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#333"],
              [1, "#FFF"],
            ],
          },
          borderWidth: 1,
          outerRadius: "107%",
        },
        {
          // default background
        },
        {
          backgroundColor: "#DDD",
          borderWidth: 0,
          outerRadius: "105%",
          innerRadius: "103%",
        },
      ],
    },
    title: {
      text: "",
    },
    series: [
      {
        name: "Speed",
        data: [parseInt(vf)],
        tooltip: {
          valueSuffix: " km/h",
        },
      },
    ],
  };
  return (
    <Card className="text-center">
      <Card.Header className=" display-5">Velocity</Card.Header>
      <Card.Body>
        <HighchartsReact highcharts={Highcharts} options={options} />
        <Row>
          <Col>
            <Card.Title>X</Card.Title>
            <Card.Text className="display-1">
              {(velX && velX.toFixed(2)) || "0.00"}
            </Card.Text>
          </Col>
          <Col>
            <Card.Title>Y</Card.Title>
            <Card.Text className="display-1">
              {(velY && velY.toFixed(2)) || "0.00"}
            </Card.Text>
          </Col>
          <Col>
            <Card.Title>Z</Card.Title>
            <Card.Text className="display-1">
              {(velZ && velZ.toFixed(2)) || "0.00"}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default VelocityComponent;
