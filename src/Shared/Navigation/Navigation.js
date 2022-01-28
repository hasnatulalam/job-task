import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navigation.css";
import logo from "../../images/logo.png";
import useFirebase from "../../hooks/useFirebase";

const Navigation = () => {
  let navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signin");
  };

  const { user, logOut } = useFirebase();

  return (
    <div>
      <Navbar style={{ backgroundColor: "#fff" }} expand="lg">
        <Container>
          <Navbar.Brand>
            <NavLink to="/home">
              <img style={{ height: "80px" }} src={logo} alt="logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="nav-menu">
                <NavLink to="/home"> <i className="fas fa-home me-2"></i>Home</NavLink>
                {user?.email ? <NavLink to="/dashboard"> <i className="fas fa-bars me-2"></i>Dashboard</NavLink> : ""}
                <>
                  {user?.email ? <button onClick={logOut} className="signin authBtn">
                    <i className="fas fa-sign-out-alt me-2"></i>
                    Sign Out
                  </button> : <button onClick={handleSignin} className="signin authBtn">
                    <i className="fas fa-sign-out-alt me-2"></i>
                    Sign In
                  </button>}
                  {user?.email ? <small className="displayName" style={{ color: "#2980b9", fontSize: "17px", fontWeight: "bold", marginLeft: "7px" }}>  <i className="fas fa-user-tie me-2"></i>{user?.displayName}</small> : ""}
                </>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
