import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FunZone from "../pages/FunZone";
import Testimonials from "../pages/Testimonials";
import Video from "../pages/Video";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/funzone" element={<FunZone />} />
      <Route path="/video/:id" element={<Video />} />
    </Routes>
  );
}
