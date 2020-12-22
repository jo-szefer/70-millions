import React from "react";
import styled from "styled-components";

const MoneyContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 10% 0 10% 0;
  background-color: green;
`;

const Money = styled.span`
  background: none;
`;

export const MoneyBar = () => {
  return (
    <MoneyContainer>
      <Money>70 000 000</Money>
    </MoneyContainer>
  );
};
