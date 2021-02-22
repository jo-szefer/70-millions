import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const MoneyContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: center;
  padding: 20px;
  margin: 10px 0;
  margin: 10% 0 10% 0;
  background: linear-gradient(rgb(46, 204, 113), rgb(26, 188, 156));
`;

const Money = styled.span`
  background: none;
  color: white;
  font-size: 2em;
  font-weight: bold;
  font-family: sans-serif;
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
