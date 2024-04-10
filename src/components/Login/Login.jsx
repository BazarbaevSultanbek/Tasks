import './Login.scss'

import React from 'react';

const Login = ({ isLoggedIn }) => {
    return (
        <div className='Login'>
            <div className="container">
                <div className="Login-block">
                    {isLoggedIn ? (
                        <h2>Welcome, {isLoggedIn}!</h2>
                    ) : (
                        <p>Please <a href="/login">login</a> to continue.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
