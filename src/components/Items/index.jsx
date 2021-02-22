import React from "react";
import styled from "styled-components";

import { itemsList } from "./itemsList";

const ItemsWrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
const StyledItem = styled.div`
  background-color: white;
  margin: 10px;
  padding: 20px;
  width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    height: auto;
    background-size: cover;
  }
  span {
    background-color: white;
    padding: 15px;
    font-size: 22px;
    font-family: sans-serif;
    font-weight: bold;
  }
  .price {
    color: rgb(36, 196, 134);
    font-size: 20px;
  }
  @media (max-width: 700px) {
    img {
      width: 60vw;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.button`
  font-size: 16px;
  cursor: pointer;
  margin: 5px;
  padding: 10px 12px;
  border-radius: 3px;
  text-align: center;
  color: white;
  border: none;
  font-weight: bold;
  background: linear-gradient(rgb(46, 204, 113), rgb(26, 188, 156));
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
