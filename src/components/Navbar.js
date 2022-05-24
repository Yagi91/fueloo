import React from "react";
import "../styles/navbar.css";
import man from "../assets/images/man.jpg";

export default function Navbar({ button }) {
  return (
    <div className="navbar">
      <h1>Fueloo</h1>
      {button ? (
        button
      ) : (
        <img
          src={man}
          alt="user"
          style={{ borderRadius: "50%" }}
          height="60"
          width="60"
        />
      )}
    </div>
  );
}
