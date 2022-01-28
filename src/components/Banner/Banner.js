import React, { useState } from "react";
import { Carousel, Col, Container, Offcanvas, Row } from "react-bootstrap";
import "./Banner.css";
import Image1 from "../../images/1.jpg";
import Image2 from "../../images/2.jpg";
import Image3 from "../../images/3.jpg";

const Banner = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="banner-area">
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ color: "#2C3E50", fontSize: "24px" }}>Popular Travel Spots</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h4>Cox's Bazar</h4>
          <img src="https://images.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2019%2F10%2F29%2F4c567690cd3663ddb127dc60c27e5ae6-Tourism-1.jpeg?auto=format%2Ccompress&format=webp&w=400&dpr=2.6" className="w-100 mb-3" alt="" />
          <h4>Kaptai</h4>
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/0f/1f/82/mohamaya-lake-mirsarai.jpg" className="w-100" alt="" />
        </Offcanvas.Body>
      </Offcanvas>

      <Container>
        <Row className="d-flex align-items-center">
          <Col xs={12} md={12} lg={6}>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontWeight: "bold",
                color: "#2c3e50",

              }}
            >
              ROYEL TRAVEL AGENCY!
            </h1>
            <p
              style={{
                fontSize: "18px",
                textAlign: "justify",

                fontFamily: "sans-serif",
                color: "#7f8c8d",

              }}
            >
              Travel is the activity of going from one place to another place. When a person makes the same trip every day to work or school, this type of travelling is usually called "commuting." Some people travel to other cities as part of their job. This is called "business travel."
            </p>
            <button className="learnmoreBtn" onClick={handleShow}>Top Spots <i className="fas fa-arrow-right"></i></button>
          </Col>
          <Col xs={12} md={12} lg={6} className="shadow-lg">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={Image1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Image2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={Image3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
