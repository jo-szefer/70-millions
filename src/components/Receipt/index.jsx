import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const ReceiptContainer = styled.div`
  box-shadow: 4px 4px 14px 0px rgba(50, 50, 50, 0.75);
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  align-items: center;
  font-family: Roboto, sans-serif;
  padding: 20px;
`;
const ProductsContainer = styled.div`
  display: grid;
  gap: 10px 0px;
`;

const Product = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 200px 45px 200px;
  @media (max-width: 500px) {
    grid-template-columns: 100px 45px 100px;
  }
`;
const Total = styled.span`
  width: 90%;
  margin: 10px;
  padding: 20px;
  border-top: solid 2px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
  text-align: center;
`;

const _Receipt = (props) => {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const totalPrice = (products) => {
    const total = products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    return formatPrice(total);
  };

  return (
    <>
      {props.products.length ? (
        <>
          <ReceiptContainer>
            <h1>Rachunek</h1>
            <ProductsContainer>
              {props.products.map((product) => (
                <Product>
                  <span>{product.name}</span>
                  <span>X{product.quantity}</span>
                  <span>{formatPrice(product.price)} zł</span>
                </Product>
              ))}
            </ProductsContainer>
            <Total>Razem: {totalPrice(props.products)} zł</Total>
          </ReceiptContainer>
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export const Receipt = connect(mapStateToProps)(_Receipt);
