import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import axios from "axios";
import './ServiceDetail.css';



import './ServiceDetails.css'



const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    const { name, description, img, price } = service;



    useEffect(() => {
        const url = `https://serene-reef-76018.herokuapp.com/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios
            .post("https://serene-reef-76018.herokuapp.com/orders", data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Package booked successfully");
                    reset();
                }
            })
    }
    const { user } = useAuth()

    return (
        <div className="details-service">
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
            <div>

                <h3 className="form-title">
                    Please fill the form to book your package
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="input" value={user.displayName} placeholder="Name" {...register("Name")} />
                    <input className="input" placeholder=" Address" {...register("Address")} />
                    <input className="input" value={user.email} placeholder="Email" {...register("email")} />
                    <input className="input" placeholder="Phone" {...register("phone")} />
                    <input className="input-detile" value={serviceId} placeholder="" {...register("serviceId")} />





                    <input className="input-btn" type="submit" />
                </form>

            </div>

        </div>
    );
};

export default ServiceDetail;