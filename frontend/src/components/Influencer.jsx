import axios from 'axios';
import '../index.css'

import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Infleuncer() {

    const influencers = useSelector(state => state.influencer.influencers)

    return (
        <>

            <Container fluid className="bg-dark h-100">
                <Row>
                    {influencers.map((data, index) => (
                        <Col md={3} xs={6} key={index}>
                            <Card className="shadow-sm mt-3" bg="secondary">
                                <Card.Img src={data.image} alt="Infleuncer Image From Instsgram" />
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>
                                        {data.gender}
                                    </Card.Text>
                                    <Link to={`/profile/${data.id}`}>
                                        <Button variant="outline-warning">View Profile</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
export default Infleuncer;