import React from 'react';
import './Login.css';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        // You can send data to the server or perform other actions
        alert('Form submitted');
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form id="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="required">Email ID</label>
                        <input type="email" id="email" name="email" placeholder="Enter Email Address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="required">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter Password" required />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <div className="additional-links">
                        <a href="/register">Don't have an account? Sign up</a>
                        <a href="forgot-password.jsx">Login trouble? Contact Support</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
