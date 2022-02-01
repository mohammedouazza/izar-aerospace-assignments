import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function VelocityComponent({ veloctity }) {
  return (
    <Card className="text-center">
      <Card.Header className=" display-5">Velocity</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>X</Card.Title>
            <Card.Text className="display-1">
              {veloctity.x.toFixed(2)}
            </Card.Text>
          </Col>
          <Col>
            <Card.Title>Y</Card.Title>
            <Card.Text className="display-1">
              {veloctity.y.toFixed(2)}
            </Card.Text>
          </Col>
          <Col>
            <Card.Title>Z</Card.Title>
            <Card.Text className="display-1">
              {veloctity.z.toFixed(2)}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default VelocityComponent;
