import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import './App.css'

function Infleuncer () {
    return (
        <>
            <Container fluid className="bg-dark">
                <Card className="shadow-sm" bg="secondary">
                <Row className="g-0">
                    <Col xs={4} md={2} >
                        <Card.Img src="https://storage.googleapis.com/ares-profile-pictures/hd/millicentrose-71e7f4e3d3866b6399ccf7a226d4d766_hd.jpg" alt="Infleuncer Image From Instsgram" className="mini-profile-img"/>
                    </Col>
                    <Col xs={8} md={10}>
                        <Card.Body>
                            <Card.Title>Infleuncer Name</Card.Title>
                            <Card.Text>
                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam obcaecati laudantium magni rerum quam eaque unde iusto? Minima voluptates alias omnis atque voluptas, assumenda labore explicabo aspernatur facilis. Placeat! */}
                            </Card.Text>
                            <Button variant="outline-warning">View Profile</Button>
                        </Card.Body>
                    </Col>
                </Row>
                </Card>
            </Container>
        </>
    )
}
export default Infleuncer;