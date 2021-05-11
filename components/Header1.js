import React, { useState } from "react";
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
  const [men, setMen] = useState(false);

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
          <Nav.Link href="#action/3.4">
            <i className={`${styles.icon} bi bi-search`}></i>
          </Nav.Link>
          <Nav.Link href="#action/3.4">
            <i className={`${styles.icon} bi bi-person-fill`}></i>
          </Nav.Link>

          <Nav.Link href="#action/3.4">
            <i className={`${styles.icon} 1bi bi-basket-fill`}></i>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar expand="lg" className={`${styles.wrap}`}>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`${styles.icon}`}
        ></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link className={`${styles.cat} text-white`} href="/home">
                Active
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={`${styles.cat} text-white`} eventKey="link-1">
                Link
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className={`${styles.cat} text-white`} eventKey="link-2">
                Link
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        {/* <Nav.Item as="li">
          <Nav.Link className={`${styles.cat} text-white`} href="/home">
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white" eventKey="link-1">
            Link
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className="text-white" eventKey="link-2">
            Link
          </Nav.Link>
        </Nav.Item> */}
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
