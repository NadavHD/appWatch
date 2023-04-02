import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Layout from "./Layout";
import Error from "../components/Error";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
