import React from "react";
import Button from "./button";
import "../styles/homepage/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h1>
        Get Started <br />
        Today
      </h1>
      <Button text={"Sign In"} size="40px" padding="80px" />
    </footer>
  );
}
