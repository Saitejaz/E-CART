import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../hooks/Context";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <Navbar variant="dark" className="Navbar" style={{backgroundColor:"#343A5C"}}>
      <Container>
        <Navbar.Brand>
          <Link href="/" style={{marginLeft:"-170px", color: "white" }}>
            E - CART
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 ,borderRadius:"20px"}}
            placeholder="Search..."
            className="m-auto"
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align="right" color="white">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="15px" />

              <Badge style={{borderRadius:"50%" ,}}>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minwidth: 500 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((val) => (
                    <div className="oneitem">
                      <img
                        src={val.image}
                        className="cartItemImg"
                        alt={val.name}
                        style={{height:"70px"}}
                      />
                      <div className="cartItemDetail">
                        <span>{val.name}</span>
                        <br />
                        <span>${val.price}</span>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: val,
                            });
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <span style={{ padding: 10 }}>cart is Empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
