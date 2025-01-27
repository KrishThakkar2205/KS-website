import React from "react";
import { Container, Form,Row, Col, Button } from "react-bootstrap";

function LoginForm2 () {
    return (
        <Container fluid className="py-5 bg-dark" style={{height:'80vh'}}>
            <h2 className='text-center text-warning mb-3'>Login </h2>
            <Form className="p-4 shadow-sm rounded bg-secondary">
                <Form.Group className="mb-2">
                    <Form.Label>
                        E-Mail Id
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Email" required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" required />
                </Form.Group>

                <Button variant="warning" type="submit" className="mt-4 w-100">
                    Login
                </Button>
            </Form>
            <div className="text-center text-white mt-3 ">New to use ? <a href="/register">Register</a></div>

        </Container>
    )
}

export default LoginForm2