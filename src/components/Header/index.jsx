import React from "react";
import styled from "styled-components";

import sasinJPG from "../../images/sasin.jpg";

const SasinContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledSasin = styled.img`
  margin: 10px auto 20px;
  // width: 10vw;
  width: 125px;
  height: 125px;
  display: block;
  height: auto;
  border-radius: 125px;
`;
const Title = styled.h1`
  font-family: sans-serif;
  line-height: 1.6em;
  text-align: center;
`;

export const Header = () => {
  return (
    <SasinContainer>
      <StyledSasin src={sasinJPG} alt="Zdjęcie Jacka Sasina" />
      <Title>Wydaj 70 milionów Jacka Sasina</Title>
    </SasinContainer>
  );
};
