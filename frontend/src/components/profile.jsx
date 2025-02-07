import React from "react";
import axios from 'axios';

import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function Profile () {

    const {id} = useParams();

    return(
        <Container>
            <h1>Hello World {id}</h1>
            <Row>
                <Col xs={3}>
                    <img src=""/>
                </Col>
                <Col xs={9}></Col>
            </Row>
        </Container>
    )
}
export default Profile;