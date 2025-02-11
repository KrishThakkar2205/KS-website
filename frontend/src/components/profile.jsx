import React, { useState, useEffect } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col, Image } from "react-bootstrap";

const Profile = () => {
  const { id } = useParams();
  const influencers = useSelector((state) => state.influencer.influencers) || [];
  const [influencer, setInfluencer] = useState(null);

  useEffect(() => {
    const selectedInfluencer = influencers.find((data) => data.id == id);
    setInfluencer(selectedInfluencer || null);
  }, [id, influencers]); // Dependencies added for reactivity

  // If influencer is not found, show a message
  if (!influencer) {
    return <h2 className="text-center text-danger">Influencer Not Found</h2>;
  }

  return (
    <Card className="shadow-lg p-3 mb-5 bg-secondary rounded" style={{ height: "50vh" }}>
      <Row className="align-items-center">
        {/* Profile Image on the Left */}
        <Col md={4} className="text-center">
          <Image
            src={influencer.image || "default.jpg"}
            fluid
            alt="Influencer"
          />
        </Col>

        {/* Influencer Details on the Right */}
        <Col md={8}>
          <Card.Body>
            <Card.Title className="text-warning fw-bold">{influencer.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{influencer.gender}</Card.Subtitle>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aut fugiat, aperiam, autem maiores enim nisi praesentium reiciendis fugit ducimus inventore ex minima quam qui ratione soluta ad dolore. Quo.
            </Card.Text>

            {/* Follower & Engagement Stats */}
            <Row className="mb-3">
              <Col>
                <strong>Followers:</strong> {influencer.followers || "N/A"}
              </Col>
              <Col>
                <strong>Engagement:</strong> {influencer.engagement || "N/A"}%
              </Col>
            </Row>

            {/* Social Media Links */}
            <div>
              <Button variant="outline-danger" href={influencer.instagram || "#"} target="_blank" className="me-2">
                Instagram
              </Button>
              <Button variant="outline-dark" href={influencer.youtube || "#"} target="_blank">
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
