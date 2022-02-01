import React from "react";
import { Card } from "react-bootstrap";

function StatusMessageComponent({ message }) {
  return (
    <Card className="text-center">
      <Card.Header className=" display-5">Status Message</Card.Header>
      <Card.Body>
        <Card.Text
          className="text-capitalize display-3"
          style={{ color: message.includes("error") ? "red" : "green" }}
        >
          {message}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StatusMessageComponent;
