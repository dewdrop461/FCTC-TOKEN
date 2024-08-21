import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Register.css';

const Register = () => {
    const [mobile, setMobile] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [cooldownEndTime, setCooldownEndTime] = useState(null);
    const [timer, setTimer] = useState(0);
    const navigate = useNavigate(); // Initialize useNavigate

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Handle registration logic here

        // Simulate a successful registration, then redirect to the dashboard
        alert('Registration successful!');
        navigate('/dashboard'); // Redirect to the dashboard
    };

    const handleSendMobileCode = () => {
        if (cooldownEndTime && new Date() < cooldownEndTime) {
            alert(`Please wait until ${cooldownEndTime.toLocaleTimeString()} to try again.`);
            return;
        }

        const selectedCountryCode = document.getElementById('country-code').selectedOptions[0];
        const mobileLength = parseInt(selectedCountryCode.getAttribute('data-length'));

        if (mobile.length !== mobileLength) {
            alert(`Please enter a valid ${mobileLength}-digit mobile number.`);
            return;
        }

        alert('Verification code sent to mobile number.');
        setAttempts(attempts + 1);
        startTimer();

        if (attempts >= 3) {
            setCooldownEndTime(new Date(new Date().getTime() + 2 * 60 * 60 * 1000));
            setAttempts(0);
        }
    };

    const startTimer = () => {
        let timeLeft = 60;
        setTimer(timeLeft);

        const interval = setInterval(() => {
            timeLeft--;
            setTimer(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(interval);
                setTimer(0);
            }
        }, 1000);
    };

    const handleMobileInputChange = (e) => {
        const selectedCountryCode = document.getElementById('country-code').selectedOptions[0];
        const mobileLength = parseInt(selectedCountryCode.getAttribute('data-length'));
        const value = e.target.value.replace(/\D/g, '');
        setMobile(value.slice(0, mobileLength));
    };

    const handleCountryCodeChange = () => {
        setMobile('');
    };

    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Create Your Account</h2>
                <form id="register-form" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="referral">Referral ID (Optional)</label>
                        <input type="text" id="referral" name="referral" placeholder="Enter Referral ID" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fullname" className="required">Full Name</label>
                        <input type="text" id="fullname" name="fullname" placeholder="Enter Full Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="required">Email ID</label>
                        <input type="email" id="email" name="email" placeholder="Enter Email Address" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile" className="required">Mobile Number</label>
                        <div className="mobile-input-group">
                            <select id="country-code" name="country-code" className="country-code-dropdown" onChange={handleCountryCodeChange}>
                                <option value="+1" data-length="10">+1 (USA)</option>
                                <option value="+44" data-length="10">+44 (UK)</option>
                                <option value="+91" data-length="10">+91 (India)</option>
                                {/* Add more country options here */}
                            </select>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                placeholder="Enter Mobile Number"
                                required
                                pattern="\d*"
                                value={mobile}
                                onChange={handleMobileInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-group verification-group">
                        <label htmlFor="mobile-verification">Mobile Verification Code</label>
                        <input type="text" id="mobile-verification" name="mobile-verification" placeholder="Enter Code" required />
                        <button
                            type="button"
                            id="send-mobile-code"
                            className="verification-btn"
                            onClick={handleSendMobileCode}
                            disabled={timer > 0}
                        >
                            {timer > 0 ? `Resend (${timer}s)` : 'Send Code'}
                        </button>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="required">New Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter Password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password" className="required">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required />
                    </div>
                    <button type="submit" className="register-btn">Register</button>
                </form>
                <a href="/login" className="login-link">Already have an account? Login</a>
            </div>
        </div>
    );
};

export default Register;
