import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  border: none;
  color: black;
  background-color: #f9a03f;
  font-weight: 700;
  padding-top: 3px;
  padding-bottom: 3px;
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

export default function Button({ text, size, padding, page = "sign-in" }) {
  return (
    <StyledButton size={size} padding={padding}>
      <Link to={`/${page}`}>{text}</Link>
    </StyledButton>
  );
}
