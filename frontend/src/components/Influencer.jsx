import axios from 'axios';
import '../App.css'

import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col, Dropdown } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Infleuncer() {

    const influencers = useSelector(state => state.influencer.influencers)

    return (
        <>

            <Container fluid className="bg-dark h-100" style={{paddingTop:'100px'}}>
                <Row>
                    <h6 className='text-center orange-text'>Filter according to your need to find perfect Infleuncer</h6>
                <Col xs={4}>
                    <Dropdown className='w-100 custom-dropdown'>
                        <Dropdown.Toggle  className="w-100 filter-btn">
                            City
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='w-100'>
                            <Dropdown.Item href="#/action-1">New York</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Los Angeles</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Chicago</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={4}>
                    <Dropdown className='w-100 custom-dropdown'>
                        <Dropdown.Toggle  className="w-100 filter-btn">
                            Budget
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='w-100'>
                            <Dropdown.Item href="#/action-1">$0 - $500</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">$500 - $1000</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">$1000+</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs={4}>
                    <Dropdown className='w-100 custom-dropdown'>
                        <Dropdown.Toggle className="w-100 filter-btn">
                            Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='w-100'>
                            <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Fashion</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Home</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                </Row>
                <Row>
                    {influencers.map((data, index) => (
                        <Col md={3} xs={6} key={index}>
                            <Card className="shadow-sm mt-3" style={{backgroundColor : "#D48806"}}>
                                <Card.Img src={data.image} alt="Infleuncer Image From Instsgram" />
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>
                                        {data.gender}
                                    </Card.Text>
                                    <Link to={`/profile/${data.id}`}>
                                        <Button className='button-class'>View Profile</Button>
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