import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import moneyJPG from "../../images/money.jpg";

const MoneyContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: center;
  padding: 20px;
  margin: 10px 0;
  margin: 10% 0 10% 0;
  background: linear-gradient(rgb(46, 204, 113), rgb(26, 188, 156));
  &:hover {
    background-image: url(${moneyJPG});
    background-size: 100px 40px;
    opacity: 0.9;
  }
`;

const Money = styled.span`
  background: none;
  color: white;
  font-size: 2em;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  ${MoneyContainer}:hover & {
    color: black;
  }
`;

const _MoneyBar = (props) => {
  return (
    <MoneyContainer>
      <Money>{props.money} zł</Money>
    </MoneyContainer>
  );
};

const mapStateToProps = (state) => ({
  money: state.money,
});

export const MoneyBar = connect(mapStateToProps)(_MoneyBar);
