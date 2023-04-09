import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Layout from "./Layout";
import Error from "../components/Error";
import MovieDetails from "../components/MovieDetails";

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search/:searchQ" element={<Home />} />
            <Route path="/video/:id" element={<MovieDetails />} />
            <Route path="search/:searchQ/year/:YYYY" element={<Home />} />
            <Route path="search/:searchQ/year/:YYYY/video/:id" element={<MovieDetails />} />
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
