import React from "react";


export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};


export const productReducer = (state, action) => {
  

  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_BY_RATING":{
      //console.log(action.payload)
      return { ...state, byRating: action.payload };
    }
    case "FILTER_BY_DELIVERY":
     
      return { ...state, byFastDelivery: !action.byFastDelivery };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      
      return {
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
        byAscending:false,
        byDescending:false,
        sort : "NoFilter",

      };

    default:
      return state;
  }
};
