import React from "react";
import { Card } from "react-bootstrap";

function AltitudeComponent({ altitude }) {
  return (
    <Card className="text-center">
      <Card.Header className=" display-5">Altitude</Card.Header>
      <Card.Body>
        <Card.Text className="display-1">
          {(altitude / 1000).toFixed(2)} km
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AltitudeComponent;
