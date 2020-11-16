import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Header from "./header";
import { Link } from "react-router-dom";
import "../style/navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function NavBarra() {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Nav className="nav">
        <Link to="/about" className="nav-link">
          About us
        </Link>
        <Link to="/horarios" className="nav-link">
          Horarios
        </Link>
      </Nav>
      <Link to="/" className="nav-link">
        <Header />
      </Link>
      <a
        className="social-link"
        href="https://www.instagram.com/sevenkingdoms.ingles/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ fontSize: "xx-large", color: "tomato" }}
        />
      </a>
      <a
        className="social-link"
        href="https://www.facebook.com/SevenK.Ingles"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          style={{
            fontSize: "xx-large",
            color: "steelblue",
          }}
        />
      </a>
    </Navbar>
  );
}

export default NavBarra;
