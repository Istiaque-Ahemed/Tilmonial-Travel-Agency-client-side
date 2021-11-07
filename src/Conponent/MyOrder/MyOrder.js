import React from 'react';
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
// import { useParams } from 'react-router';
import './MyOrder.css'

const MyOrder = ({ myorder }) => {
    // const { serviceId } = useParams()

    const { Name, email, Address, phone, serviceId, _id } = myorder;
    console.log(serviceId);
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch(`https://serene-reef-76018.herokuapp.com/services/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setCard(data));
    }, []);
    // Delete 
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure,you want to delete?");
        if (proceed) {
            const url = `https://serene-reef-76018.herokuapp.com/orders/${id}`;
            fetch(url, { method: "DELETE" })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        //   const reaming = orders.filer((order) => order._id !== id);
                        //   setOrdereds(reaming);
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
                        <Card.Img variant="top" src={card.img} />
                    </div>
                    <Card.Body>
                        <h3>{card.name}</h3>
                        <Card.Text>
                            {card.description}
                        </Card.Text>
                        <h3 className="text-center text-danger">Price:{card.price}</h3>

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

export default MyOrder;