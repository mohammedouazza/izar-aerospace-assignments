import React from "react";
import { Alert } from "react-bootstrap";

function DataItemComponent({ item }) {
  return (
    <Alert variant={item.type}>
      <Alert.Heading className="text-capitalize">
        {typeof item.value === "boolean" ? "Ok" : item.value}
      </Alert.Heading>
      <p>{item.title}</p>
    </Alert>
  );
}

export default DataItemComponent;
