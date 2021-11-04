import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import img from './Mailbox-bro.png'

import './Contact.css'

const Contact = () => {
    const handleContactForm = e => {
        e.preventDefaul();
    }
    return (
        //========== contact Area =========
        <>
            <div>
                <h3 className="contect-text">Contect Us</h3>
            </div>
            <div className="contect">
                <div className="img-div">
                    <img className="imgs" src={img} alt="" />
                </div>
                <div>
                    <Form onSubmit={handleContactForm} className="form">

                        {/*====== Name ===== */}
                        <Form.Group className="mb-3 " controlId="formBasicEmail">

                            <Form.Control className="input-form" type="text" placeholder="Name" />

                        </Form.Group>
                        {/*====== Email ===== */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className="input-form" type="text" placeholder="Email" />
                        </Form.Group>
                        {/*======== Subject ======= */}
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control className="input-form" type="text" placeholder="Subject" />
                        </Form.Group>
                        {/*======== TextArea ====== */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">


                            <Form.Control className="text-area" placeholder="Message" as="textarea" rows={7} />
                        </Form.Group>
                        {/*====== Send Button ===== */}
                        <Button className="icon-font" variant="" type="submit"><FontAwesomeIcon className="icon" icon={faPaperPlane} />
                            Send
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Contact;