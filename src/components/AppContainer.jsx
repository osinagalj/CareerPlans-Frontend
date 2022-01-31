import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@mui/material/Button";
import NavegationBar from "./NavegationBar";
import Footer from "./layouts/Footer";

import Header from "./layouts/Header";

export default function AppContainer({ db, setDb }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "700px" }}>
        <NavegationBar db={db} setDb={setDb} />
      </div>

      <Footer />
    </>
  );
}
