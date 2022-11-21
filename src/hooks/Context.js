import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();


const Context = ({ children }) => {
  const products = [...Array(21)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(1234, 2345, true),
    // image:faker.image.transport(),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.random.numeric() % 5,
  }));
  //  console.log(products);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
    byAscending:false,
    byDescending:false,
    sort:"Nofilter"
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
//sdfsdfsdfsdfsdfsdfsd
