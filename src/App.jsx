import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import HomeA from "./components/assignments/assignment-a/HomeA";
import HomeB from "./components/assignments/assignment-b/HomeB";
import HomeC from "./components/assignments/assignment-c/HomeC";

import Home from "./components/home/Home";
import NavbarComponent from "./components/layout/NavbarComponent";

const App = () => {
  return (
    <Container>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assignment-a" element={<HomeA />} />
        <Route path="/assignment-b" element={<HomeB />} />
        <Route path="/assignment-c" element={<HomeC />} />
      </Routes>
    </Container>
  );
};

export default App;
