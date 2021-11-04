import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    const { name, description, img, price } = service;

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <div className="card-bod col-lg-4 col-md-3 col-12">
                <Card className="card shadow">
                    <div className="inner">
                        <Card.Img variant="top" src={img} />
                    </div>
                    <Card.Body>
                        <h3>{name}</h3>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <h3 className="text-center text-danger">Price:{price}</h3>
                    </Card.Body>

                </Card>

            </div>

        </div>
    );
};

export default ServiceDetail;