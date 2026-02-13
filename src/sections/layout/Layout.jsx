import React from "react";
import {
  Box,
} from "@mui/material";
import { Outlet } from "react-router-dom";

import { Footer } from "./components/footer/Footer";
import { NavBar } from "./components/navbar/Navbar";

export function Layout() {

  return (
    <>
      <NavBar></NavBar>

      <Box component="main">
        <Outlet />
      </Box>

      <Footer/>
    </>
  );
}
