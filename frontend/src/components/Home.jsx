import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import influencerBg from '../images/InfluencerBG.jpg'
import brandsBg from '../images/brand.jpg'
import cardLogo from '../images/cardLogo.jpg'
import card1 from '../images/LivePuffDeal.jpg'
import { Link } from "react-router-dom";

// Hero Section Component
function Hero() {
  return (
    <div className="text-center py-5 bg-dark text-white">
      <Container>
        <h1 className="mb-4">Connect Together, Grow Together</h1>
        <div>
          <Link to={`/influencer`}>
            <Button variant="warning" size="lg" className="me-3">For Influencers</Button>
          </Link>
          <Button variant="outline-warning" size="lg">For Brands</Button>
        </div>
      </Container>
    </div>
  );
}

// Section Component for Influencers and Brands
function Section({ title, description, bgImage }) {
  const sectionStyle = {
    backgroundColor: "rgba(0,0,0,0.7)",
    backgroundImage: `url(${bgImage})`,
    backgroundBlendMode: "overlay",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "60px 20px",
    color: "#fff",
    textAlign: "center",
  };

  return (
    <Container fluid style={sectionStyle}>
      <Row>
        <Col>
          <h2 className="mb-4">{title}</h2>
          <p className="mb-4">{description}</p>
          <Button variant="light" size="lg">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
}


// Success Stories Component
function SuccessStories() {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <h2 className="text-center mb-4">Success Stories</h2>
        <Row className="g-4 justify-content-center">
          {[
            { 'Name': 'Sync KonnectSphere PVT LTD', 'discreption': 'A startup Funded By Government in 2024 for creating a change in Influencer Marketing. we are is Associated with 50+ Influencers of Ahmedabad', 'image': cardLogo },
            { Name: 'Puffing - The Live Puff', discreption: 'Sync KonnectSphere was very glad to Complete the urgent requirement of Mr.Nikung (The Owner) with Influencer for their New Outlet', image: card1 }]
            .map((story, index) => (
              <Col key={index} xs={12} sm={6} md={4} >
                <Card className=" card-hover bg-secondary text-warning ">
                  <Card.Img variant="top" src={story.image} />
                  <Card.Body>
                    <Card.Title>{story.Name}</Card.Title>
                    <Card.Text>{story.discreption}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}



function Home() {
  return (
    <>
      <Hero />
      <Section title="For Influencers" description="Showcase your work and get booked directly by brands." bgImage={influencerBg} />
      <Container fluid className="bar-div bg-dark text-center">
        <div className="vertical-animated">
          <p className="txt text-warning">Grow Business with Influencer Marketing</p>
          <p className="txt text-warning">Associated with More than 50 Infleuncer of Ahmedabad</p>
          <p className="txt text-warning">Infleucner of all Category of Business</p>
        </div>
      </Container>
      <Section title="For Brands" description="Find the perfect influencer to boost your brand." bgImage={brandsBg} />
      <SuccessStories />
    </>
  )
}

export default Home;