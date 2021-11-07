import React from 'react';

import { Card, Button } from 'react-bootstrap';


const ManageSS = ({ managess }) => {

    const { _id, name, img, description, price } = managess

    const handleDeled = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (

        <>
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

                    <br />


                    <Button onClick={() => handleDeled(_id)} className="button" variant="danger">Delead</Button>



                </Card>
            </div>
        </>
    );
};

export default ManageSS;