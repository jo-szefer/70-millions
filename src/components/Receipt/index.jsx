import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const WrappedReceipt = styled.div`
  // background-color: #c6b9cd;
  box-shadow: 4px 4px 14px 0px rgba(50, 50, 50, 0.75);
  width: 30vw;
  height: 40vh;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  font-family: Roboto, sans-serif;
  h1 {
  }
`;
const Item = styled.span``;
const Product = styled.div``;
const Quantity = styled.span``;
const Price = styled.span``;

const _Receipt = (props) => {
  return (
    <WrappedReceipt>
      <h1>Rachunek</h1>

      {props.products
        ? props.products.map((product) => (
            <Product>
              <Item>{product.name}</Item>
              <Quantity>{product.quantity}</Quantity>
              <Price>{product.price}</Price>
            </Product>
          ))
        : null}
    </WrappedReceipt>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export const Receipt = connect(mapStateToProps)(_Receipt);
