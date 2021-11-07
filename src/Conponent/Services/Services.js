import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://serene-reef-76018.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <>
            <h2 className="pakage"> Our Package</h2>
            <div className="services">

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)

                }
            </div>
        </>
    );
};

export default Services;