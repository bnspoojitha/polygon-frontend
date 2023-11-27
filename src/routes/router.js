import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import Loginpage from "../pages/Loginpage";
import Cdkconsole from "../pages/Cdkconsole";


const Routers = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      <Route path="/" element={<Loginpage />} />
      <Route path="/Cdkconsole" element={<Cdkconsole />} />
    </Routes>
  );
};

export default Routers;
