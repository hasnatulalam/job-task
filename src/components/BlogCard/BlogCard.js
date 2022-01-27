import React from "react";
import { Col, Row } from "react-bootstrap";
import "./BlogCard.css";
import {Link} from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const { _id, title, date, time, category, image } = blog;

  return (
    <Col xs={12} md={6} lg={6}>
      <Row className="d-flex align-items-center mx-auto">
        <Col xs={12} md={12} lg={6} className="blog-img">
          <img src={image} alt="" />
        </Col>
        <Col xs={12} md={12} lg={6} className="ms-0">
          <h5>{title}</h5>
          <h6 className="text-muted">
          {date}, {time} UTC +0:06
          </h6>
          <h6>Category: {category}</h6>
          <Link to={`/blogs/${_id}`}>
          <button className="signin authBtn">Read More</button>
          </Link>
        </Col>
      </Row>
    </Col>
  );
};

export default BlogCard;
