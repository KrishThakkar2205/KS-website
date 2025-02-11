import React from "react";
import '../App.css';
// Hooks
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Bootstrap Component
import { Card, Button, Row, Col, Image } from "react-bootstrap";


const Profile = ( ) => {

    const { id } = useParams();
    const influencers = useSelector(state => state.influencer.influencers);
    const influencer = influencers.filter(data => data.id == id);

    return (
        <Card className="shadow-lg p-3 mb-5 bg-secondary rounded" style={{height:'50vh'}}>
        <Row className="align-items-center">
            {/* Profile Image on the Left */}
            <Col md={4} className="text-center">
            <Image 
                src={influencer[0].image} 
                // roundedCircle 
                fluid 
                alt="Influencer" 
                // className="profile-image"
            />
            </Col>

            {/* Influencer Details on the Right */}
            <Col md={8}>
            <Card.Body>
                <Card.Title className="orange-text fw-bold">{influencer[0].name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{influencer[0].gender}</Card.Subtitle>
                <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut fugiat, aperiam, autem maiores enim nisi praesentium reiciendis fugit ducimus inventore ex minima quam qui ratione soluta ad dolore. Quo.</Card.Text>

                {/* Follower & Engagement Stats */}
                <Row className="mb-3">
                <Col><strong>Followers:</strong> 1000 </Col>
                <Col><strong>Engagement:</strong> 85% </Col>
                </Row>

                {/* Social Media Links */}
                <div>
                
                    <Button variant="outline-danger" href='#' target="_blank" className="me-2">
                    Instagram
                    </Button>
                
                
                    <Button variant="outline-dark" href='#' target="_blank">
                    YouTube
                    </Button>
            
                </div>
            </Card.Body>
            </Col>
        </Row>
        </Card>
    );
};

export default Profile;