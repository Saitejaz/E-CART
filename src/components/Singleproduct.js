import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../hooks/Context";
import Rating from "./Rating";

const Singleproduct = ({ value }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={value.image} alt={value.name} />
        <Card.Body>
          <Card.Title>{value.name}</Card.Title>
          <Card.Subtitle>
            <span>${value.price}</span>
            {value.fastDelivery ? (
              <div> Fast Deliver</div>
            ) : (
              <div>Takes time to deliver</div>
            )}
            <Rating rating={value.rating > 5 ? value.rating : value.rating} />
          </Card.Subtitle>
          {cart.some((v) => v.id === value.id) ? (
            <Button
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: value });
              }}
              variant="danger"
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: value });
              }}
             
            >
            ADD To CART
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Singleproduct;
