import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './Order.css'

const Order = () => {
    const { user } = useAuth()
    const [orders, setOrder] = useState([])

    useEffect(() => {
        fetch(`https://serene-reef-76018.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user.email])
    console.log(orders);
    return (
        <div className="My-order">
            {
                orders.map(myorder => <MyOrder
                    key={myorder._id}

                    myorder={myorder}

                ></MyOrder>)

            }
        </div>
    );
};

export default Order;