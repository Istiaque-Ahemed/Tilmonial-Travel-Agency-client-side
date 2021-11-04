import React from 'react';
import './Headar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import travle from '../../Image/travilelogo.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Header = () => {
    const { user, logout } = useAuth()
    return (
        <>

            <Navbar bg="light" variant="light" collapseOnSelect expand="lg" sticky="top">
                <Container >
                    <img
                        src={travle}
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                    />
                    <Navbar.Brand to="/home"></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav className="pe-5 Nav-area">
                            <NavLink className="pe-4 Nav-link" to="/home">Home</NavLink>
                            <NavLink className="pe-4 Nav-link" to="/services">Services</NavLink>
                            <NavLink className="pe-4 Nav-link" to="/contact">Contact Us</NavLink>
                            {user?.email && <button onClick={logout} className="button-1">Logout</button>}
                        </Nav>
                        <Navbar.Text>
                            <span className="ps-3">{user.displayName} </span> <NavLink to="/login" className="Nav-text">Login</NavLink>
                        </Navbar.Text>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;