import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/button";
import "../styles/sign.css";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const StyledButton = styled.button`
  border: none;
  color: black;
  background-color: #f9a03f;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: ${({ padding }) => padding || "60px"};
  padding-left: ${({ padding }) => padding || "60px"};
  font-size: ${({ size }) => size || "20px"};
  a {
    text-decoration: none;
    color: black;
    &:focus {
      outline: none;
    }
  }
  &:hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const button = <Button text="Sign Up" page="sign-up" />;
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
    }
    if (user) navigate("/user");
  }, [user, loading, navigate]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Navbar button={button} />
      <div className="form_container">
        <h1 className="title">Sign In</h1>
        <form className="form">
          <div className="elt">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div className="elt">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
        </form>
        <StyledButton
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Sign In
        </StyledButton>
      </div>
    </>
  );
}
