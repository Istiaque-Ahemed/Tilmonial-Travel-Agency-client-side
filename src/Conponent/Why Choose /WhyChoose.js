import React from 'react';
import './WhyChoose.css'
import money from '../../Image/whychoos/Screenshot from 2021-10-29 16-39-17.png'
import world from '../../Image/whychoos/Screenshot from 2021-10-29 16-39-45.png'
import camera from '../../Image/whychoos/Screenshot from 2021-10-29 16-42-49.png'
import calandr from '../../Image/whychoos/Screenshot from 2021-10-29 16-45-05.png'
import group from "../../Image/whychoos/Screenshot from 2021-10-29 16-45-16.png"
import love from "../../Image/whychoos/Screenshot from 2021-10-29 16-45-27.png"

const WhyChoose = () => {
    return (
        <>
            <h1 className="choose-header">Why Choose Tilmonial?</h1>
            <p className="choose-para">A complete search of the internet has found these results: Enjoy your trip is the most popular phrase on the web. </p>
            <div className="why-choos-area">
                <div className="single">
                    <img src={money} height="100px" alt="" />

                    <div className="About-para">
                        <b className="bold-titel">Value for Money</b>
                        <p>Like we said earlier, travel agencies have taken note of solo travelers and how they travel. That is one of the reason </p>
                    </div>
                </div>
                <div className="single">
                    <img src={world} height="100px" alt="" />
                    <div className="About-para">
                        <b className="bold-titel">Diverse Destinations</b>
                        <p>No matter how good of a trip planner you are, there are always things you will miss, especially if it is the first time
                        </p>
                    </div>
                </div>
                <div className="single">
                    <img src={camera} height="100px" alt="" />
                    <div className="About-para">
                        <b className="bold-titel">Beautiful Places</b>
                        <p>Even the most adventurous people can have new town insecurities, especially if they are travelling alone. However,
                        </p>
                    </div>
                </div>
                <div className="single">
                    <img src={calandr} height="100px" alt="" />
                    <div className="About-para">
                        <b className="bold-titel">Fast Booking</b>
                        <p>When travelling, many a times you miss out the local hotspots and that’s because there is no one to let you know
                        </p>
                    </div>
                </div>
                <div className="single">
                    <img src={group} height="100px" alt="" />
                    <div className="About-para">
                        <b className="bold-titel">Support Team</b>
                        <p>Whether it is camping that is famous, or trekking – there is a lot to do that backpackers simply miss .</p>
                    </div>
                </div>
                <div className="single">
                    <img src={love} height="100px" alt="" />
                    <div className="About-para">
                        <b className="bold-titel">Passionate Travel</b>
                        <p>Just ask them to show you places that are not frequented by a lot of people,



                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChoose;