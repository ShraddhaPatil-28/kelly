import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Title from '../Components/Title';
import { Form } from 'react-bootstrap';
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Button } from 'react-bootstrap';
const myStyle = {
  letterSpacing: '2px', // Adjust the value as needed
};
export default function Contact() {
  return (
    <>
      
      <Title titl="CONTACT" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."></Title>

      <Container>
        <Row>
          <Col lg={12} sm={12}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d36722.10274471739!2d73.77891086721444!3d19.96436900666427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701668078569!5m2!1sen!2sin"
              style={{ width: "100%", height: "400px", border: 0, allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
          </Col>
        </Row>
      </Container>

      <Container className='mt-5'>
        <Row>
          <Col lg={4}>
            <Row>
              <Col lg={2}>
                <IoLocationSharp style={{ color: 'green' }} className='shaeco mt-2' size={25} />
                <MdOutlineEmail style={{ color: 'green' }} className='shaeco mt-5' size={25} />
                <IoCall style={{ color: 'green' }} className='shaeco mt-5' size={25} />
              </Col>

              <Col lg={10}>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
                <h4>  Email:</h4>
                <p>info@example.com</p>
                <h4>  Call:</h4>
                <p>+1 5589 55488 55s</p>
              </Col>
            </Row>
          </Col>


          <Col lg={8}>
            <Row>
              <Col lg={6} className='mt-2'>
                <Form.Group controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="your name"
                  />
                </Form.Group>
              </Col>
              <Col lg={6} className='mt-2'>
                <Form.Group controlId="validationCustom01">

                  <Form.Control
                    required
                    type="text"
                    placeholder="your Email"
                  />
                </Form.Group>
              </Col>
              <Col lg={12} className='mt-4'>
                <Form.Group controlId="validationCustom01">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Subject"
                  />
                </Form.Group>
              </Col>
              <Col lg={12}>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1"></label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
                </div>
              </Col>


            </Row>
            <Button className='mt-3 mx-auto justify-content-center d-flex ' variant="success">Send Message</Button>
          </Col>
        </Row>
      </Container>

     


    </>
  )
}
