import React from "react";
import styled from "styled-components";

import { itemsList } from "./itemsList";

const ItemsWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
`;
const StyledItem = styled.div`
  background-color: white;
  margin: 10px;
  width: 30vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 70%;
    height: auto;
  }
  span {
    background-color: white;
    padding: 10px;
  }
`;

export const Items = () => {
  return (
    <ItemsWrapper>
      {itemsList.map((item) => (
        <StyledItem>
          <img src={item.image} />
          <span>{item.name}</span>
          <span>{item.price} zł</span>
          <input></input>
          <button>Kup</button>
          <button>Sprzedaj</button>
        </StyledItem>
      ))}
    </ItemsWrapper>
  );
};
