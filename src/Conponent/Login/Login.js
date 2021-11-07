import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsinGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'




    const handleGoogleLogin = () => {
        signInUsinGoogle()
            // .then(result => {

            //     setUser(result.user)
            // })
            // .catch(error => {
            //     setError(error.message)
            // })
            .then(result => {
                history.push(redirect_uri)
            })

    }
    return (
        <>
            <h2>Please Login</h2>
            <button onClick={handleGoogleLogin}>Google Sign In</button> <br />
            {/* <Link to="/register">New User?</Link> */}
        </>
    );
};

export default Login;