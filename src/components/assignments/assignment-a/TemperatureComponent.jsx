import React from "react";
import { Card } from "react-bootstrap";

function TemperatureComponent({ temp }) {
  return (
    <Card className="text-center">
      <Card.Header className=" display-5">Temperature</Card.Header>
      <Card.Body>
        <Card.Text className="display-1">{temp.toFixed(2)}°</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TemperatureComponent;
