import React, { useState } from "react";
import Link from "next/link";

import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";

function Header() {
  const [showLinks, setShowLinks] = useState(true);

  return (
    <React.Fragment>
      <div className="top_part">
        <Container>
          <Row>
            <Col lg={6} md={7} sm={8}>
              <nav>
                <ul className="topbar">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  |
                  <li>
                    <a href="#">Jak nakupovat</a>
                  </li>
                  |
                  <li>
                    <a href="#">Obchodní podmínky</a>
                  </li>
                  |
                  <li>
                    <a href="#">Kontaktujte nás</a>
                  </li>
                </ul>
              </nav>
            </Col>
            <Col lg={6} md={7} sm={8}>
              <div className="clearfix">
                <div className="right-links float-right">
                  <a href="#">Přihlásit</a>/<a href="#">Registrovat</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="middle_part">
        <Container>
          <Row>
            <Col sm={3}>
              <div className="logo">
                <img
                  className="img-responsive"
                  src="https://www.apollos.cz/images/logo_apollos.png"
                ></img>
              </div>
            </Col>
            <Col sm={{ span: 4, offset: 1 }}>
              <div className="input-group search_form">
                <input type="search" className="form-control" placeholder="Vyhledat" />
                <span class="input-group-btn">
                  <button type="button" className="btn btn-default btn-lg">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </span>
              </div>

              {/* <div id="search" className="input-group">
                <input
                  type="text"
                  name="search"
                  value=""
                  placeholder="Vyhledat"
                  className="form-control input-lg"
                />
                <span className="input-group-btn">
                  <button type="button" className="btn btn-default btn-lg">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </span>
              </div> */}
            </Col>
            <Col sm={{ span: 3, offset: 1 }} className="cart_wrap">
              <div id="cart" class="btn-group btn-block">
                <button type="button" class="btn btn-inverse btn-block btn-lg">
                  <i></i> <span id="cart-total">0 ks - 0 Kč</span>
                </button>
                <ul class="dropdown-menu pull-right">
                  <li>
                    <p class="text-center">Váš nákupní košík je prázdný!</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Navbar">
        <div className="leftSite">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <nav className="wrap">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Info</a>
                </li>
              </ul>
            </nav>
          </div>
          <span className="">Kategorie</span>
          <button onClick={() => setShowLinks(!showLinks)}>
            <i className="bi bi-list"></i>
          </button>
        </div>
        {/* <div className="rightSite">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div> */}
      </div>
    </React.Fragment>
  );
}

export default Header;
