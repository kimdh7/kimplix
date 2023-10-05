import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

export default function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/search" element={<Search />} />
          </Routes>
      </Router>
  );
}
