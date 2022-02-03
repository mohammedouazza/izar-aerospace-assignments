import React from "react";
import { Row, Col, Alert } from "react-bootstrap";

const comments = [
  {
    text: "Add velocity calculation on both APIs for more performance and security for the client side.",
    type: "warning",
  },
  {
    text: "The properties of the change direction web socket API are capitalised, which might break the frontend.",
    type: "danger",
  },
  {
    text: "Add GraphQL to give the frontend the hand to extract the needed format.",
    type: "success",
  },
  {
    text: "Close the old web sockets for a user to avoid server problems.",
    type: "primary",
  },
  {
    text: "Add significant error messages to inform the developer, like 'Too many sockets' or 'Unclosed sockets'",
    type: "info",
  },
];
const HomeC = () => {
  return (
    <div>
      <h1 className="text-center mt-4 mb-4">Improvements</h1>
      <Row>
        {comments.map((comment, index) => (
          <Col key={index}>
            <Alert
              variant={comment.type}
              style={{ height: 300 }}
              className="text-justify"
            >
              <Alert.Heading>{comment.text}</Alert.Heading>
            </Alert>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeC;
