import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a class="navbar-brand" href="#home">
            <h2>HTNH</h2>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  Home <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#deities">
                  Deities
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#priests">
                  Priests
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#donate">
                  Donate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#appointment">
                  Book Appointment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://htnhbv.org/" target="_blank">
                  Cultural Arm
                </a>
              </li>
              <li className="nav-item social">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/hindutempleofnewhampshire/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
