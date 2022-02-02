import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function GoingUpComponent({ goingUp }) {
  return (
    <Card className="text-center">
      <Card.Header className=" display-5">Going Up</Card.Header>
      <Card.Body>
        {goingUp ? (
          <FontAwesomeIcon icon={faArrowUp} color="green" />
        ) : (
          <FontAwesomeIcon icon={faArrowDown} color="red" />
        )}
      </Card.Body>
    </Card>
  );
}

export default GoingUpComponent;
