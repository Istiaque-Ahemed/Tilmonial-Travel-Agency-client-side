import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';
import './ManageOrder.css'

const ManageOrder = () => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <>
            <h2 className="manage-order">Manage You Order</h2>
            <div className="manage-order">
                {order.map(manageservice => <ManageSingleOrder
                    key={manageservice._id}
                    manageservice={manageservice}

                ></ManageSingleOrder>)}
            </div>
        </>
    );
};

export default ManageOrder;