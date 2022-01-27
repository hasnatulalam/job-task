import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";
import useAuth from "../../Assets/hooks/useAuth";
import Header from "../../Common/commonComponents/Header";
import Swal from 'sweetalert2'

const Order = () => {
  const { user } = useAuth();
  const { productid } = useParams();

  const [orderedProduct, setOrderedProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/products/${productid}`)
      .then((res) => res.json())
      .then((data) => setOrderedProduct(data));
  }, []);

  const history = useHistory();
  const redirect_uri = "/dashboard";

  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending";
    data.email = user?.email;
    data.order = orderedProduct;

    fetch("http://localhost:5000/placeorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            'Order Confirmed !'
          )
          history.push(redirect_uri);
        }
      });
  };

  useEffect(() => {
    document.title = "Doggo | Order";
  }, []);

  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <div className="col-12 col-lg-6">
            <div className="order-details my-5 p-3 shadow-lg">
              <h3 className="text-center text-decoration-underline">
                Order Details
              </h3>
              <img
                src={orderedProduct.img}
                alt="destination"
                className="img-fluid"
                style={{
                  height: "200px",
                  objectFit: "cover",
                  display: "block",
                  margin: "0px auto",
                }}
              />
              <h5 className="text-cyan my-2 text-center">
                You've Ordered {orderedProduct?.name} For Your Car.
              </h5>
              <h6 className="text-center">
                Product Price is {orderedProduct?.price}
              </h6>
              <h6 className="text-center">
                Product Price is {orderedProduct?.category}
              </h6>
              <p className="text-center">
                Product Price is {orderedProduct?.description}
              </p>
              <div className="text-center">
                <Link to="/">
                  <Button className="btn-danger px-3 fw-semi-bold mb-4 mt-3 text-white shadow-none">
                    Cancel Order
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="form-container py-5">
              <Form
                onSubmit={handleSubmit(onSubmit)}
                className="shadow-lg px-2 px-md-5 py-3 text-cyan"
              >
                <h2 className=" text-center mb-2">We'll Contact You Soon !</h2>
                <p className="text-cyan text-center mb-5">
                  You can canel order from My orders section within next 7 days.
                  We keep our clients happy.
                </p>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      value={user?.displayName}
                      className="text-secondary fw-semi-bold"
                      readOnly
                      {...register("name", { required: true })}
                      {...(errors.name && <span>Name is required</span>)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={user?.email}
                      className="text-secondary fw-semi-bold"
                      readOnly
                      {...register("email", { required: true })}
                      {...(errors.email && <span>Email is required</span>)}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="+8801740020464"
                      className="text-secondary fw-semi-bold mb-5"
                      required
                      {...register("phone")}
                      {...(errors.phone && <span>Phone is required</span>)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      placeholder="Dhaka"
                      className="text-secondary fw-semi-bold mb-5"
                      required
                      {...register("address")}
                      {...(errors.address && <span>Address is required</span>)}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="20.02.2004"
                      className="text-secondary fw-semi-bold mb-5"
                      required
                      {...register("date")}
                      {...(errors.date && <span>date is required</span>)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      placeholder="05.34"
                      className="text-secondary fw-semi-bold mb-5"
                      required
                      {...register("time")}
                      {...(errors.time && <span>Time is required</span>)}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="5000"
                      className="text-secondary fw-semi-bold mb-5"
                      required
                      {...register("expense")}
                      {...(errors.expense && <span>date is required</span>)}
                    />
                  </Form.Group>

                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridRating">
                    <Form.Label>
                      Give Us A Rating (1 is the wrost , 5 is the best)
                    </Form.Label>
                    <select
                      required
                      className="form-control shadow-none"
                      {...register("rating")}
                    >
                      <option>Select Rating</option>
                      <option value="1">1</option>
                      <option value="1.5">1.5</option>
                      <option value="2">2</option>
                      <option value="2.5">2.5</option>
                      <option value="3">3</option>
                      <option value="3.5">3.5</option>
                      <option value="4">4</option>
                      <option value="4.5">4.5</option>
                      <option value="5">5</option>
                    </select>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    className="mb-3 "
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Post Experience</Form.Label>
                    <Form.Control
                      className="shadow-none"
                      as="textarea"
                      rows={3}
                      placeholder="Write something here..."
                      {...register("comment", { required: true })}
                    />
                  </Form.Group>
                </Row>


                <div className="text-center">
                  <Button
                    type="submit"
                    className="px-3 py-2 fw-bold btn-light-green shadow-none"
                  >
                    <i className="fas fa-clipboard-check text-warning me-2"></i>
                    Confirm Order
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Order;
