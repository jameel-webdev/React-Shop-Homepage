import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Badge,
} from "react-bootstrap";

const Header = ({ count }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                New Arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button variant="dark">
          <FaShoppingCart className="mx-2 mt-0" />
          Cart
          <Badge bg="secondary" className="mx-2">
            {count}
          </Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
