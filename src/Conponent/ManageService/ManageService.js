import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageSS from '../ManageSingleService/ManageSS';
import './ManageService.css'

const ManageService = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <>
            <h2>Manage Service</h2>

            <div className="manage-service">
                {
                    service.map(managess => <ManageSS
                        key={managess._id}
                        managess={managess}

                    ></ManageSS>)
                }
            </div>
        </>
    );
};

export default ManageService;