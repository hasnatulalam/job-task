import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link, NavLink, Outlet, useMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useFirebase from "../../hooks/useFirebase";
import { useDispatch, useSelector } from "react-redux";
import { setIsAdmin } from "../../redux/slice";

const Dashboard = () => {
  // let { path, url } = useMatch();
  const { user, logOut, setIsLoading } = useFirebase();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.allBlogs.isAdmin);

  // check admin
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://pacific-crag-05570.herokuapp.com/users/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        if (data.role === 'admin') {
          // setIsAdmin(true);
          dispatch(setIsAdmin(true));
          setIsLoading(false);
        }
        else {
          // setIsAdmin(false);
          dispatch(setIsAdmin(false))
          setIsLoading(false);
        }
      })
  }, [user.email])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="dashboard-area">
      <Container fluid className="ps-0">
        <Row className="p-0">
          <Col lg={2} className="p-0">
            <div className="side-navbar desktop">
              <Link to="/" className="logo">
                <img style={{ width: "120px" }} src={logo} alt="" />
              </Link>

              <div className="dashboard-menu">
                <ul>
                  {!isAdmin && (
                    <>
                      <li>
                        <NavLink end to="/dashboard/myBlogs">
                          <i className="fas fa-newspaper me-2"></i>
                          My Blogs
                        </NavLink>
                      </li>
                      <li>

                        <NavLink end to="/dashboard/addBlog">
                          <i className="fas fa-pencil-alt me-2"></i>
                          Write Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink end to="/home">
                          <i className="fas fa-home me-2"></i>
                          Back To Home
                        </NavLink>
                      </li>
                    </>
                  )}
                  {isAdmin && (
                    <>
                      <li>
                        <NavLink end to="/dashboard/manageBlogs">
                          <i className="fas fa-newspaper me-2"></i>
                          Manage Blogs
                        </NavLink>
                      </li>
                      <li>
                        <NavLink end to="/dashboard/addBlog">
                          <i className="fas fa-pencil-alt me-2"></i>
                          Write Blog
                        </NavLink>
                      </li>
                      <li>
                        <NavLink end to="/dashboard/makeAdmin">
                          <i className="fas fa-user me-2"></i>
                          Make an Admin
                        </NavLink>
                      </li>
                      <li>
                        <NavLink end to="/home">
                          <i className="fas fa-home me-2"></i>
                          Back To Home
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <button className="signin ms-4" onClick={logOut}>
                Logout
              </button>
            </div>
          </Col>
          <Col lg={10} className="p-0">
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <div className="side-navbar">
                <Link to="/" className="logo">
                  <img style={{ width: "120px" }} src={logo} alt="" />
                </Link>

                <div className="dashboard-menu">
                  <ul>
                    {!isAdmin && (
                      <>
                        <li>
                          <NavLink end to="/dashboard/myBlogs">
                            My Blogs
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/dashboard/addBlog">
                            Write Blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/home">
                            Back To Home
                          </NavLink>
                        </li>
                      </>
                    )}
                    {isAdmin && (
                      <>
                        <li>
                          <NavLink end to="/dashboard/manageBlogs">
                            Manage Blogs
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/dashboard/addBlog">
                            Write Blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/dashboard/makeAdmin">
                            Make an Admin
                          </NavLink>
                        </li>
                        <li>
                          <NavLink end to="/home">
                            Back To Home
                          </NavLink>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <button className="signin ms-4" onClick={logOut}>

                  Logout
                </button>
              </div>
            </Offcanvas>
            <div className="dashbord-header d-flex justify-content-between align-items-center">
              <Button className="dashboard-sm" onClick={handleShow}>
                {" "}
                <FontAwesomeIcon icon={faBars} />
              </Button>
              <p>Dashboard</p>
              <span>{user.displayName}</span>
            </div>

            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
