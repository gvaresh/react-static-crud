import React from "react";
import "../styles.css";
import logo from "../resources/logo.png";

export default function Header() {
  return (
    <>
      <img className="logo" src={logo} alt="movieDox"></img>
      <h2 className="subTitle">It's Time for Movie - also book next movie</h2>
    </>
  );
}
