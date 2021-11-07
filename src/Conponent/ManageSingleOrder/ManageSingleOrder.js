import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ManageSingleOrder = ({ manageservice }) => {
    const { _id, serviceId, Name, Address, phone, email } = manageservice
    const [orderd, setOrderd] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrderd(data))
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure,you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, { method: "DELETE" })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        alert("Deleted Successfully");
                    }
                });
        }
    };
    return (
        <>
            <div className="card-bod col-lg-4 col-md-3 col-12">
                <Card className="card shadow">
                    <div className="inner">
                        <Card.Img variant="top" src={orderd.img} />
                    </div>
                    <Card.Body>
                        <h3>{orderd.name}</h3>
                        <Card.Text>
                            {orderd.description}
                        </Card.Text>
                        <h3 className="text-center text-danger">Price:{orderd.price}</h3>

                        <hr />
                        <p>Order-Receipt :</p>
                        <p className="Name">Name: {Name}</p>
                        <p className="Name">Address: {Address}</p>
                        <p className="Name">Email: {email}</p>
                        <p className="Name">Phone: {phone}</p>
                    </Card.Body>

                    <br />


                    <Button onClick={() => handleDelete(_id)} className="button" variant="">Delete</Button>



                </Card>
            </div>
        </>
    );
};

export default ManageSingleOrder;