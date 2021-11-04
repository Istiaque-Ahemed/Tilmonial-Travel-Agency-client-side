import React from 'react';
import './banner.css'
import trvcover from '../../Image/trv.jpeg'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <img src={trvcover} width="100%" height="60%" alt="" />

            </div>
        </>
    );
};

export default Banner;