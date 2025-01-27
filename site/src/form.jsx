import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

import Swal from 'sweetalert2'


function LoginForm() {

  const [user, setUser] = useState('Influencer')
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    if(formData.password.lenght < 8){
      Swal.fire({
        title: 'Error In Registering',
        text: 'The password lenght is less than 8',
        icon: 'warning',
        confirmButtonColor:'#ffc107',
        
      })
    }
    if(formData.password != formData.passwordRepeat){
      Swal.fire({
        title: 'Error In Registering',
        text: 'The password entered are not matching, Try Again',
        icon: 'warning',
        confirmButtonColor:'#ffc107',
        
      })
    }
  }



  return (
    <Container className="py-5 bg-dark " fluid>
      
      <h2 className="text-center mb-4 text-warning">{user === 'Influencer' ?"Register as an Influencer":"Register as Brand"}</h2>
      <Row className="mb-3 mt-5">
        {user === 'Influencer'?(
          <>
            <Col xs={6} className="d-flex justify-content-center">
              <Button variant="warning" className="w-100" type="button" onClick={()=>{setUser('Influencer');setFormData({'user':'Influencer'})}}>Influencer</Button>
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Button variant="outline-warning" className="w-100" type="button" onClick={()=>{setUser('Brand'); setFormData({'user':'Brand'})}}>Brand</Button>
            </Col>
          </>
        ):(
          <>
            <Col xs={6} className="d-flex justify-content-center">
              <Button variant="outline-warning" className="w-100" type="button" onClick={()=>{setUser('Influencer');setFormData({'user':'Influencer'})}}>Influencer</Button>
            </Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Button variant="warning" className="w-100" type="button" onClick={()=>{setUser('Influencer');setFormData({'user':'Brand'})}}>Brand</Button>
            </Col>
          </>
        )}
        
      </Row>
      {user === 'Influencer'?(<Form className="p-4 shadow-sm rounded bg-secondary">
        {/* Personal Details */}

        <h4 className="mb-3">Personal Details</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" name="name" onChange={handleChange} required/>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} required/>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" name="phoneNumber" onChange={handleChange} required/>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="City" as='select' name="city" onChange={handleChange} required>
                <option selected disabled className="text-secondary"> Select City You Operate</option>
                <option>Ahmedabad</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        {/* Social Media Details */}
        <h4 className="mb-3">Social Media Details</h4>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="instagram">
              <Form.Label>Instagram Profile</Form.Label>
              <Form.Control type="url" placeholder="Link to Instagram" required name="instagram" onChange={handleChange}/>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="youtube">
              <Form.Label>YouTube Channel</Form.Label>
              <Form.Control type="url" placeholder="Link to YouTube" name="youtube" onChange={handleChange}/>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="facebook">
              <Form.Label>Instagram Profile</Form.Label>
              <Form.Control type="url" placeholder="Link to Facebook" name="facebook" onChange={handleChange}/>
            </Form.Group>
          </Col>
        </Row>
        

        <Form.Group controlId="category" className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" name="category" onChange={handleChange} required>
            <option disabled selected>Select Category</option>
            <option className="option-hover">Fashion</option>
            <option className="option-hover">Fitness</option>
            <option className="option-hover">Technology</option>
            <option className="option-hover">Travel</option>
            <option className="option-hover">Real Estate</option>
            <option className="option-hover">Food</option>
            <option className="option-hover">Corporate</option>
            <option className="option-hover">Others</option>
          </Form.Control>
        </Form.Group>


        <h4 className="mb-3">Password</h4>
        <Row className="mb-3">
          <Col md={6} className="mb-3">
            <Row>
              <Col xs={12} >
                <Form.Group controlId="name">
                  <Form.Label>Lenght Should be Minimun 8 Characters</Form.Label>
                  <Form.Control type="password" placeholder="Create a Password" name="password" onChange={handleChange} required></Form.Control>
                </Form.Group>
              </Col>
              {/* <Col xs={2}>
                <Button variant="transparent" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                  </svg>
                </Button>
              </Col> */}
            </Row>
          </Col>
          <Col md={6}>
          <Row>
              <Col xs={12} >
                <Form.Group controlId="name">
                  <Form.Label>Must Have Atleast One Special Character</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" name="passwordRepeat" onChange={handleChange} required></Form.Control>
                </Form.Group>
              </Col>
              {/* <Col xs={2}>
                <Button variant="transparent" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                  </svg>
                </Button>
              </Col> */}
            </Row>
          </Col>
        </Row>

        
        <Button variant="warning" type="submit" className="w-100 " onClick={handleSubmit}>
          Register Now
        </Button>
        
      </Form>):(
        <Form className="p-4 shadow-sm rounded bg-secondary">
        {/* Personal Details */}

        <h4 className="mb-3">Personal Details</h4>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" name="name" onChange={handleChange} required/>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email" onChange={handleChange} required/>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" name="phoneNumber" onChange={handleChange} required/>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="City" as='select' name="city" onChange={handleChange} required>
                <option selected disabled className="text-secondary"> Select City You Operate</option>
                <option>Ahmedabad</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="location" className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" name="address" onChange={handleChange} required>
              
            </Form.Control>
          </Form.Group>

        {/* Social Media Details */}
        <h4 className="mb-2">Business Details</h4>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group controlId="instagram">
              <Form.Label>Business/Brand Name</Form.Label>
              <Form.Control type="text" placeholder="Name Of Business" required name="businessName" onChange={handleChange}/>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="youtube">
              <Form.Label>Category of Business</Form.Label>
              <Form.Control type="text" placeholder="Category Of Business" name="categoryBusiness" onChange={handleChange}/>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="Instagram Link">
              <Form.Label>Facebook Profile</Form.Label>
              <Form.Control type="url" placeholder="Link to Instagram" name="instagram" onChange={handleChange}/>
            </Form.Group>
          </Col>
        </Row>
        

        {/* <Form.Group controlId="category" className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" name="category" onChange={handleChange} required>
            <option disabled selected>Select Category</option>
            <option className="option-hover">Fashion</option>
            <option className="option-hover">Fitness</option>
            <option className="option-hover">Technology</option>
            <option className="option-hover">Travel</option>
            <option className="option-hover">Real Estate</option>
            <option className="option-hover">Food</option>
            <option className="option-hover">Corporate</option>
            <option className="option-hover">Others</option>
          </Form.Control>
        </Form.Group> */}


        <h4 className="mb-3">Password</h4>
        <Row className="mb-3">
          <Col md={6} className="mb-3">
            <Row>
              <Col xs={12} >
                <Form.Group controlId="name">
                  <Form.Label>Lenght Should be Minimun 8 Characters</Form.Label>
                  <Form.Control type="password" placeholder="Create a Password" name="password" onChange={handleChange} required></Form.Control>
                </Form.Group>
              </Col>
              {/* <Col xs={2}>
                <Button variant="transparent" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                  </svg>
                </Button>
              </Col> */}
            </Row>
          </Col>
          <Col md={6}>
          <Row>
              <Col xs={12} >
                <Form.Group controlId="name">
                  <Form.Label>Must Have Atleast One Special Character</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" name="passwordRepeat" onChange={handleChange} required></Form.Control>
                </Form.Group>
              </Col>
              {/* <Col xs={2}>
                <Button variant="transparent" className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                  </svg>
                </Button>
              </Col> */}
            </Row>
          </Col>
        </Row>

        
        <Button variant="warning" type="submit" className="w-100 " onClick={handleSubmit}>
          Register Now
        </Button>
        
      </Form>)}
      <h6 className="text-center text-light mt-3">Already registered? <a href="/login">Login</a></h6>
    </Container>
   
  );
}

export default LoginForm;
