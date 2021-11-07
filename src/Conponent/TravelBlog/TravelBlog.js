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
                <p className="text-center pb-3">The Travel Blog Site, Create free travel blogs to share with friends, family and the world. Join the World's Friendliest Travel Community.</p>
                <div className="blog-area">
                    <Row xs={1} md={3} className="g-4">
                        <Card className="me-5" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={news1} />
                            <Card.Body>
                                <Card.Title>Venice</Card.Title>
                                <Card.Text>
                                    Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="me-5" style={{ width: '18rem' }}>
                            <Card.Img variant="bottom" src={news2} />
                            <Card.Body>
                                <Card.Title>London bridges</Card.Title>
                                <Card.Text>
                                    London Bridge is a bridge in Lake Havasu City, Arizona. It was originally built in the 1830s and formerly spanned the River Thames in London, England. The bridge was purchased by Robert P. McCulloch from the City of London in 1968. ... The "rededication" of the London Bridge took place on October 10, 1971.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="me-5" style={{ width: '18rem' }}>
                            <Card.Img className="img" src={news3} />
                            <Card.Body>
                                <Card.Title>Las Vegas</Card.Title>
                                <Card.Text>
                                    Las Vegas, often known simply as Vegas, is the 26th-most populous city in the United States, the most populous city in the state of Nevada, and the county seat of Clark County.
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