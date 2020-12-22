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
  width: 10vw;
  height: auto;
  border-radius: 125px;
`;
const Title = styled.h1``;

export const Header = () => {
  return (
    <SasinContainer>
      <StyledSasin src={sasinJPG} alt="Zdjęcie Jacka Sasina" />
      <Title>Na co można wydać 70 milionów Jacka Sasina?</Title>
    </SasinContainer>
  );
};
