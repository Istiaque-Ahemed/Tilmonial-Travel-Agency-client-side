import React from 'react';
import './TravelBlog.css';
import news1 from '../../Image/Travel Blog/news1.jpg'
import { Card, Row } from 'react-bootstrap';
import news2 from '../../Image/Travel Blog/news2.jpg'
import news3 from '../../Image/Travel Blog/news3.jpg'

const TravelBlog = () => {
    return (
        <>
            <div>
                <h1 className="blog-tital text-center pb-2">Travel Blog</h1>
                <p className="text-center pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, delectus!</p>
                <div className="blog-area">
                    <Row xs={1} md={3} className="g-4">
                        <Card className="me-5" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={news1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>

                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="me-5" style={{ width: '18rem' }}>
                            <Card.Img variant="bottom" src={news2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="me-5" style={{ width: '18rem' }}>
                            <Card.Img className="img" src={news3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default TravelBlog;