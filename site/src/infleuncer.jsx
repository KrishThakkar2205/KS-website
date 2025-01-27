import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

function Infleuncer () {
    return (
        <>
            <Container fluid className="bg-dark">
                <Card className="shadow-sm" bg="secondary">
                <Row className="g-0">
                    <Col md={4}>
                        <Card.Img src="https://via.placeholder.com/150" alt="Infleuncer Image From Instsgram" className="h-100" />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>Infleuncer Name</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam obcaecati laudantium magni rerum quam eaque unde iusto? Minima voluptates alias omnis atque voluptas, assumenda labore explicabo aspernatur facilis. Placeat!
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