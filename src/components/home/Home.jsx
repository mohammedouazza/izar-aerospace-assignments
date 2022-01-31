import React from "react";
import { Col, Row } from "react-bootstrap";
import ItemCardComponent from "./ItemCardComponent";

const listAssignments = [
  { id: 0, name: "Assignment A", url: "assignment-a" },
  { id: 1, name: "Assignment B", url: "assignment-b" },
  { id: 2, name: "Assignment C", url: "assignment-c" },
];
const Home = () => {
  return (
    <Row>
      {listAssignments.map((item) => (
        <Col>
          <ItemCardComponent key={item.id} item={item} />
        </Col>
      ))}
    </Row>
  );
};

export default Home;
