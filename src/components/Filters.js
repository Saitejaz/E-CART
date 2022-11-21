import React from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../hooks/Context";
import Rating from "./Rating";



const Filters = () => {
  const {
    productState: {  byAscending,byDescending,byRating, byFastDelivery, sort, searchQuery },
    productDispatch,
  } = CartState();
 
  //console.log( byRating, byFastDelivery,byAscending,byDescending,sort);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowtohigh",
            })
          }
          value={byAscending}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "hightolow",
            })
          }
          value={byDescending}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast delivery only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating</label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        {" "}
        Clear All Filters
      </Button>
    </div>
  );
};

export default Filters;
