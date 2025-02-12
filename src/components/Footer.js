import React from "react";
import "../styles.css";
// import logo from "../logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* <img className="logo" src={logo} alt="movieDox"></img> */}
      <h2 className="FooterColor">
        <span className="yearColor">{currentYear}</span> @ Movie Footer Links -
        and other links{" "}
      </h2>
    </>
  );
}
