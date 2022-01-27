import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const Contact = () => {

  const [messageBody, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setMessage((preV) => {
      return { ...preV, [field]: value }
    })
  }
  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log(messageBody);
    if (!messageBody.name || !messageBody.email || !messageBody.subject || !messageBody.message) {
      toast.error("All fields are required");
    }
    else {
      toast.success("Message Sent!");
      console.log('message sent');
      setMessage({ name: '', email: '', subject: '', message: '' })
      await axios.post('https://portfolio-messages.herokuapp.com/sendMessage',
        messageBody)
        .then((response) => console.log(response.data))
        .catch(err => console.log(err))
    }
  }
  return (
    <section id="contact">
      <div data-aos="fade-down" className="container contact_me">
        <h1 className='text-center mb-4'>Contact Me</h1>

        <div className="row mt-4">
          <div className="col-lg-6">
            <div data-aos="fade-down" className="contact_information row">
              <div className=" con location col-12 col-sm-12 col-md-6 col-lg-12 ">
                <span className="contact_icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                <div className="my_contact_info">
                  <h6>Location</h6>
                  <p>Muradpur,Chittagong</p>
                </div>
              </div >
              <div className="con call_me col-12 col-sm-12 col-md-6 col-lg-12">
                <span className="contact_icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                <div className="my_contact_info">
                  <h6>Call Me</h6>
                  <p>+01793243664</p>
                </div>
              </div>
              <div className="con gmail col-12 col-sm-12 col-md-6 col-lg-12">
                <span className="contact_icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
                <div className="my_contact_info">
                  <h6>Email</h6>
                  <p>ataulhamidalvi@gmail.com</p>
                </div>
              </div>


            </div>
          </div>
          <div className="col-lg-6">
            <div data-aos="fade-right" className="contact_form">
              <form onSubmit={handleSendMessage} method="POST">
                <div className="row">
                  <div className="col-lg-12">
                    <input type="text" onChange={handleChange} value={messageBody.name} name="name" aria-required="true" aria-invalid="false" placeholder="Your Name" />
                  </div>
                  <div className="col-lg-12">
                    <input type="email" onChange={handleChange} value={messageBody.email} name="email" aria-required="true" aria-invalid="false" placeholder="Your Email" />
                  </div>
                  <div className="col-lg-12">
                    <input type="text" onChange={handleChange} value={messageBody.subject} name="subject" aria-required="true" aria-invalid="false" placeholder="Your Subject" />
                  </div>
                  <div className="col-lg-12">
                    <textarea onChange={handleChange} name="message" value={messageBody.message} aria-required="true" placeholder="Your Message" style={{ background: "#F8F8F8" }}></textarea>
                  </div>
                  <div className="col-lg-12">
                    <input type="submit" value="Send Message" />
                  </div>




                </div>
              </form>
            </div>
          </div>

        </div>




      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact