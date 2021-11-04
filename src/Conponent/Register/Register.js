import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
            <Link to="/login">Already Register?</Link>
        </>
    );
};

export default Register;