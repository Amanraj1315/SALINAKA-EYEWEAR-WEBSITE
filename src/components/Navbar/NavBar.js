import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import pic from "../../Assests/Images/logo-full.png";
import { BsBagCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.counter.items);

  // const context = useContext(CartContext);
  // const amountOfCartItems=context.items.reduce((curNumber,item)=>{
  //   return curNumber + item.amount;
  // },0)
  const cartClick = (e) => {
    e.preventDefault();
    navigate("/cart");
  };
  const getTotalQuantity = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <img src={pic} alt="logo" />
        <Container fluid>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-4 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/product">Featured</Nav.Link>
              <Nav.Link href="/recommended">Recommonded</Nav.Link>

              <i></i>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>

            <BsBagCheck onClick={cartClick} />
            <span>{getTotalQuantity()}</span>

            <Form className="d-flex mx-5">
              <Button variant="outline-success mx-2" href="/signup">
                Sign Up
              </Button>
              <Button variant="outline-dark" href="/signin">
                Sign In
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {props.children}
    </div>
  );
};

export default NavBar;
