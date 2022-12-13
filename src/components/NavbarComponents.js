import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonComponents } from "./ButtonComponents";
import "./Navbar.css";

function NavbarComponents() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [color, setColor] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const changeColor = () => {
    if (window.scrollY >= 700) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const showButton = () => {
    if (window.innerWidth <= 743) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  console.log(window.innerWidth);

  useEffect(() => {
    changeColor();
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? "navbarwhite" : "navbar"}>
      <div className="navbar-container ">
        <Link
          to="/"
          className={color ? "navbar-logowhite" : "navbar-logo"}
          onClick={closeMobileMenu}
        >
          TRVL
          <i className="fab fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i
            className={
              click
                ? "fas fa-times"
                : "fas fa-bars"
                ? "fas fa-bars"
                : "fas fa-barswhite"
            }
          />
        </div>
        <ul className={click ? "nav-menu active " : "nav-menu "}>
          <li className="nav-item">
            <Link
              to="/"
              className={color ? "nav-linkswhite" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item  ">
            <Link
              to="/services"
              className={color ? "nav-linkswhite" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className={color ? "nav-linkswhite" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile "
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && (
          <ButtonComponents buttonStyle="btn--outline">
            SIGN UP
          </ButtonComponents>
        )}
      </div>
    </nav>
  );
}

export default NavbarComponents;
