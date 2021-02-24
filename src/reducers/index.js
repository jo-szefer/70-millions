const initialState = {
  money: 70000000,
  products: [],
};

export const reducer = (state = initialState, action) => {
  const index = action.product
    ? getIndexOfProduct(state.products, action.product.name)
    : -1;

  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        money:
          state.money - action.product.price >= 0
            ? state.money - action.product.price
            : state.money,
        products:
          state.money - action.product.price >= 0
            ? index === -1
              ? [...state.products, { ...action.product, quantity: 1 }]
              : increaseQuantity(state.products, index)
            : state.products,
      };
    case "SELL_PRODUCT":
      return {
        ...state,
        money:
          index === -1
            ? state.money
            : increaseMoney(state.products, index, state.money),
        products:
          index === -1
            ? state.products
            : decreaseQuantity(state.products, index),
      };
    default:
      return state;
  }
};

const getIndexOfProduct = (products, name) => {
  const index = products.findIndex((product) => product.name === name);
  return index;
};
const increaseQuantity = (products, index) => {
  const newProducts = [...products];
  newProducts[index].quantity++;
  return newProducts;
};
const decreaseQuantity = (products, index) => {
  const newProducts = [...products];
  if (newProducts[index].quantity === 1) {
    newProducts.splice(index, 1);
  } else {
    newProducts[index].quantity--;
  }
  return newProducts;
};

const increaseMoney = (products, index, money) => {
  if (products[index].quantity === 0) {
    return money;
  } else {
    return money + products[index].price;
  }
};
