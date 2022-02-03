import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AltitudeComponent from "./AltitudeComponent";
import GoingUpComponent from "./GoingUpComponent";
import StatusMessageComponent from "./StatusMessageComponent";
import TemperatureComponent from "./TemperatureComponent";
import VelocityComponent from "./VelocityComponent";

const HomeA = () => {
  const dispatch = useDispatch();
  const assignmantA = useSelector((state) => state.assignmentA);
  const data = assignmantA.data;
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "SPECTRUM_STATUS_FETCH_REQUESTED" });
    }, 1000);
  }, []);

  const onUpdate = () => {
    dispatch({ type: "SPECTRUM_STATUS_FETCH_REQUESTED" });
  };

  return (
    <>
      <div className="text-center">
        <Button variant="primary" onClick={onUpdate} className="t mt-4 mb-4">
          Update
        </Button>
      </div>

      <VelocityComponent velocity={data.velocity} />
      <Row className="mt-2">
        <Col>
          <AltitudeComponent
            altitude={data.altitude}
            altitudeArr={assignmantA.altitudeArr}
          />
        </Col>
        <Col>
          <TemperatureComponent
            temp={data.temperature}
            temperatureArr={assignmantA.temperatureArr}
          />
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

export default HomeA;
