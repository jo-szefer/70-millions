import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  text-align: center;
  height: 10vh;
  font-family: Roboto, sans-serif;
  color: black;
  font-size: 0.7em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &:hover {
    background: linear-gradient(rgb(46, 204, 113), rgb(26, 188, 156));
    color: white;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <span style={{ color: "white" }}>Hire me</span>
      <span> © 2021 Copyright: Joanna, based on Neal.fun project </span>
    </StyledFooter>
  );
};
