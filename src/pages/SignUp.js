import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/button";
import styled from "styled-components";
import "../styles/sign.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";

const StyledButton = styled.button`
  border: none;
  color: black;
  background-color: #f9a03f;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: ${({ padding }) => padding || "5px"};
  padding-left: ${({ padding }) => padding || "5px"};
  font-size: ${({ size }) => size || "16px"};
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

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const button = <Button text="Sign In" page="sign-In" />;

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const register = () => {
    if (!name) {
      alert("Please enter a name");
    }
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/user", { replace: true });
  }, [user, loading, navigate]);

  return (
    <>
      <Navbar button={button} />
      <div className="form_container">
        <h1 className="title">Sign Up</h1>
        <form className="form">
          <div className="elt">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleName}
              required
            />
          </div>
          <div className="elt">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmail}
              required
            />
          </div>
          <div className="elt">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
        </form>
        <StyledButton padding={"60px"} size="20px" onClick={register}>
          Sing Up
        </StyledButton>
      </div>
    </>
  );
}
