import axios from 'axios';
import '../index.css'

import React, { useEffect, useState } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

function Infleuncer () {
    
    const [influencers, getInfluencers] = useState([])

    useEffect(()=>{ 
        const getData = async() => {
            try {
                const data = await axios.get('https://67a5bd10c0ac39787a1f3d8d.mockapi.io/influencer/user')
                getInfluencers(data.data);
            } catch (error) {
                console.log('some error occour ');
                console.log(error);
            }
        }
        getData();
    }, []);


    return (
        <>
            
            <Container fluid className="bg-dark h-100">
                <Row>
                {influencers.map((data) => (         
                    <Col md={3} xs={6}>
                        <Card className="shadow-sm mt-3" bg="secondary">
                        <Card.Img src={data.image} alt="Infleuncer Image From Instsgram"/>
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                {data.gender}
                            </Card.Text>
                            <Button variant="outline-warning" href={`/profile/${data.id}`}>View Profile</Button>
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