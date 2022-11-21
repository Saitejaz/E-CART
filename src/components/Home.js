import React from "react";
import { NavItem } from "react-bootstrap";
import { CartState } from "../hooks/Context";
import Filters from "./Filters";
import Singleproduct from "./Singleproduct";
import "./styles.css";
const Home = () => {
  const {
    state: { products },
    productState: { byRating, byFastDelivery, sort, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;
    console.log(sort);
    if (sort !=="NoFilter") {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowtohigh" ? a.price - b.price : b.price - a.price
      );
    }
   

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((product) => product.fastDelivery);
    }
    
    if (byRating) {
     
      sortedProducts = sortedProducts.filter(
        (product) => {  
          return(product.rating >= byRating) }
      );
      console.log(sortedProducts);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
    }
    
    return sortedProducts;
  };
  // console.log(products);
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((item) => {
          return <Singleproduct value={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
