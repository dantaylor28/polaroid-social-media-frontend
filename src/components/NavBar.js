import React, { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const [expanded, setExpanded] = useState(false);

  const handleSignOut = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (error) {
      console.log(error);
    }
  };

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
        activeClassName={styles.ActiveLink}
        to="/pinboard"
      >
        My Pinboard
      </NavLink>
      <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
        Sign Out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        Profile
        <img src={currentUser?.profile_image} alt="" />
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
      expanded={expanded}
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>Logo here</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
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
