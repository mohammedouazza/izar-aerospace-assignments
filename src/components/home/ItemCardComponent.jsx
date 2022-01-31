import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemCardComponent({ item }) {
  const { name, url } = item;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={"/img/" + url + ".jpg"} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Check {name}</Card.Text>
        <Link to={"/" + url} className="btn btn-primary form-control">
          Start
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ItemCardComponent;
