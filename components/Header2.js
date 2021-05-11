import React, { useState } from "react";
import Link from "next/link";
import styles from "./css/header.module.css";
import {
  Navbar,
  Nav,
  FormControl,
  NavDropdown,
  Form,
  Button,
  Container,
  ListGroup,
} from "react-bootstrap";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#">
          <img
            src="https://www.designportal.cz/wp-content/uploads/2016/09/albi-logo-01.jpg"
            style={{ width: "150px" }}
          ></img>
        </Navbar.Brand>
        <div className="mx-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-0" />
            <Button variant="outline-success">
              <i className="bi bi-search" style={{ fontSize: "15px" }}></i>
            </Button>
          </Form>
        </div>
        <Nav className="ml-auto">
          <Link href="#">
            <Nav.Link>
              <i className={`${styles.icon} bi bi-search`}></i>
            </Nav.Link>
          </Link>
          <Nav.Link href="#action/3.4">
            <i className={`${styles.icon} bi bi-person-fill`}></i>
          </Nav.Link>

          <Nav.Link href="#action/3.4">
            <i className={`${styles.icon} 1bi bi-basket-fill`}></i>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar collapseOnSelect expand="md" className="menu-bg">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">Electro</Nav.Link>
              <Nav.Link href="#pricing">shoes</Nav.Link>
              <Nav.Link href="#pricing">robots</Nav.Link>
              <Nav.Link href="#pricing">robots</Nav.Link>
              <Nav.Link href="#pricing">robots</Nav.Link>
              <Nav.Link href="#pricing">robots</Nav.Link>
              <Nav.Link href="#pricing">robots</Nav.Link>
              <Nav.Link href="#pricing">robots</Nav.Link> */}

              <div className="menu-bar">
                <ul>
                  <li>
                    <a href="">home</a>
                  </li>
                  <li>
                    <a href="">about us</a>
                    <div className="sub-menu-1">
                      <ul>
                        <li>
                          <a href="">first</a>
                        </li>
                        <li>
                          <a href="">second</a>
                        </li>
                        <li>
                          <a href="">second</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="">services</a>
                  </li>
                  <li>
                    <a href="">clients</a>
                  </li>
                  <li>
                    <a href="">pricing</a>
                  </li>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <div className="menu-bar">
        <ul>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">about us</a>
            <div className="sub-menu-1">
              <ul>
                <li>
                  <a href="">first</a>
                </li>
                <li>
                  <a href="">second</a>
                </li>
                <li>
                  <a href="">second</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="">services</a>
          </li>
          <li>
            <a href="">clients</a>
          </li>
          <li>
            <a href="">pricing</a>
          </li>
        </ul>
      </div> */}
    </React.Fragment>
  );
};

export default Header;
