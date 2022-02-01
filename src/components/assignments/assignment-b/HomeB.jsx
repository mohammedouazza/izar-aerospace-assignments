import React, { useEffect } from "react";
import { Alert, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import VelocityComponent from "../assignment-a/VelocityComponent";
import AltitudeComponent from "../assignment-a/AltitudeComponent";
import GoingUpComponent from "../assignment-a/GoingUpComponent";
import StatusMessageComponent from "../assignment-a/StatusMessageComponent";
import TemperatureComponent from "../assignment-a/TemperatureComponent";

const HomeB = () => {
  const dispatch = useDispatch();

  const assignmentB = useSelector((state) => state.assignmentB);
  const data = assignmentB.data;
  const error = assignmentB.error;
  const open = assignmentB.open;
  console.log(assignmentB);

  useEffect(() => {
    dispatch({ type: "SPECTRUM_WS_FETCH_REQUESTED" });
  }, []);

  const handleDirection = (e) => {
    dispatch({
      type: "SPECTRUM_CHANGE_DIRECTION_FETCH_REQUESTED",
      payload: e.target.value,
    });
  };

  return (
    <>
      <Row className="text-center">
        <Col>
          <Alert variant={open ? "success" : "danger"}>
            <Alert.Heading>{open ? "Live" : "Server Closed"}</Alert.Heading>
          </Alert>
        </Col>
        {!data.goingUp && (
          <Col>
            <Form.Group className="mb-3 col-3 text-center">
              <Form.Label>Direction</Form.Label>
              <Form.Select onChange={handleDirection}>
                <option value="">--</option>
                <option value={true}>true</option>
                <option value={false}>false</option>
              </Form.Select>
            </Form.Group>
          </Col>
        )}
        {error && (
          <Col>
            <Alert variant={"danger"}>
              <Alert.Heading>{error}</Alert.Heading>
            </Alert>
          </Col>
        )}
      </Row>

      <VelocityComponent veloctity={data.velocity} />
      <Row className="mt-2">
        <Col>
          <AltitudeComponent altitude={data.altitude} />
        </Col>
        <Col>
          <TemperatureComponent temp={data.temperature} />
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <GoingUpComponent goingUp={data.goingUp} />
        </Col>
        <Col>
          <StatusMessageComponent message={data.statusMessage} />
        </Col>
      </Row>
    </>
  );
};

export default HomeB;
