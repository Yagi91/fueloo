import React from "react";
import Navbar from "./Navbar";
import Button from "./button";
import "../styles/homepage/header.css";

export default function Header() {
  const button = <Button text="Sign In" rad="50px" />;
  return (
    <header className="header">
      <Navbar button={button} />
      <div className="hero">
        <h1>
          Learn More For <br /> Less
        </h1>
      </div>
    </header>
  );
}
