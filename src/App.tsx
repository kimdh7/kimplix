import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled, { createGlobalStyle } from "styled-components";


export default function App() {
  return (
      <div>
        <Outlet />
      </div>
  );
}
