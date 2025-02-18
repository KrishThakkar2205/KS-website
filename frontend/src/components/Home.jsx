import React from "react";
import '../App.css'

// Bootstrap Components
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlurText from "./BlurText";
import FadeContent from "./FadeContent";
import GradientText from "./GradientText";

// Images
import influencerBg from '../images/InfluencerBG.jpg'
import brandsBg from '../images/brand.jpg'
import cardLogo from '../images/cardLogo.jpg'
import card1 from '../images/LivePuffDeal.jpg'

// Hero Section Component
function Hero() {
  return (
    <div className="text-center py-5 bg-dark text-white">
      <Container>
        <h1 className="mb-4">
        {/* <BlurText
          text="Connect Together, Grow Together"
          delay={150}
          animateBy="words"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        /> */}
        <GradientText colors={["#edf2f4", "#D00000","#DC2F02","#edf2f4","#E85D04","#F48C06","#FAA307","#FFBA08"]} animationSpeed={3} showBorder={false} className="custom-class">
          Connect Together, Grow Together
        </GradientText>
        </h1>
        <div>
          <Link to={`/influencer`}>
            <Button variant="" size="lg" className="me-3 button-class-rev">For Influencers</Button>
          </Link>
          <Button variant="" className="button-class-rev" size="lg">For Brands</Button>
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
          <FadeContent delay={1200} duration={1500}>
          <h2 className="mb-4">{title}</h2>
          <p className="mb-4">{description}</p>
          </FadeContent>
          <Link to={`/register`}>
          <Button  className="button-class" size="lg">Get Started</Button></Link>
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
                <Card className=" card-hover bg-dark text-warning ">
                  <Card.Img variant="top" src={story.image} />
                  <Card.Body>
                    <Card.Title className="orange-text">{story.Name}</Card.Title>
                    <Card.Text className="orange-text">{story.discreption}</Card.Text>
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
          <p className="txt orange-text">Grow Business with Influencer Marketing</p>
          <p className="txt orange-text">Associated with More than 50 Infleuncer of Ahmedabad</p>
          <p className="txt orange-text">Infleucner of all Category of Business</p>
        </div>
      </Container>
      <Section title="For Brands" description="Find the perfect influencer to boost your brand." bgImage={brandsBg} />
      <SuccessStories />
    </>
  )
}

export default Home;