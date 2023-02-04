import React from "react";
import styles from "../styles/NavBar.module.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const currentUser = useCurrentUser();

  const signedInLinks = (
    <>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item>Action</NavDropdown.Item>
        <NavDropdown.Item>Another action</NavDropdown.Item>
        <NavDropdown.Item>Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>
      <NavLink
        className={styles.NavLink}
        to="/"
        onClick={() => {}}
      >
        Sign Out
      </NavLink>
    </>
  );
  const signedOutLinks = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.ActiveLink}
        to="/signin"
      >
        Sign In
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.ActiveLink}
        to="/create/account"
      >
        Create Account
      </NavLink>
    </>
  );

  return (
    <Navbar
      className={styles.NavBar}
      bg="dark"
      variant="dark"
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>Logo here</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.ActiveLink}
              to="/"
            >
              Home
            </NavLink>
            {currentUser ? signedInLinks : signedOutLinks}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
