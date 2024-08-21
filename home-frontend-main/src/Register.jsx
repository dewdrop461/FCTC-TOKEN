import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [mobile, setMobile] = useState('');
    const [attempts, setAttempts] = useState(0);
    const [cooldownEndTime, setCooldownEndTime] = useState(null);
    const [timer, setTimer] = useState(0);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted');
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
                                <option value="+61" data-length="9">+61 (Australia)</option>
                                <option value="+81" data-length="10">+81 (Japan)</option>
                                <option value="+49" data-length="10">+49 (Germany)</option>
                                <option value="+86" data-length="11">+86 (China)</option>
                                <option value="+33" data-length="9">+33 (France)</option>
                                <option value="+7" data-length="10">+7 (Russia)</option>
                                <option value="+55" data-length="11">+55 (Brazil)</option>
                                <option value="+39" data-length="9">+39 (Italy)</option>
                                <option value="+34" data-length="9">+34 (Spain)</option>
                                <option value="+27" data-length="9">+27 (South Africa)</option>
                                <option value="+64" data-length="9">+64 (New Zealand)</option>
                                <option value="+82" data-length="10">+82 (South Korea)</option>
                                <option value="+52" data-length="10">+52 (Mexico)</option>
                                <option value="+20" data-length="10">+20 (Egypt)</option>
                                <option value="+60" data-length="10">+60 (Malaysia)</option>
                                <option value="+65" data-length="8">+65 (Singapore)</option>
                                <option value="+62" data-length="10">+62 (Indonesia)</option>
                                <option value="+45" data-length="8">+45 (Denmark)</option>
                                <option value="+358" data-length="10">+358 (Finland)</option>
                                <option value="+46" data-length="10">+46 (Sweden)</option>
                                <option value="+41" data-length="9">+41 (Switzerland)</option>
                                <option value="+31" data-length="9">+31 (Netherlands)</option>
                                <option value="+90" data-length="10">+90 (Turkey)</option>
                                <option value="+92" data-length="10">+92 (Pakistan)</option>
                                <option value="+93" data-length="9">+93 (Afghanistan)</option>
                                <option value="+94" data-length="9">+94 (Sri Lanka)</option>
                                <option value="+66" data-length="9">+66 (Thailand)</option>
                                <option value="+63" data-length="10">+63 (Philippines)</option>
                                <option value="+98" data-length="10">+98 (Iran)</option>
                                <option value="+964" data-length="10">+964 (Iraq)</option>
                                <option value="+967" data-length="9">+967 (Yemen)</option>
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
                <a href="login" className="login-link">Already have an account? Login</a>
            </div>
        </div>
    );
};

export default Register;
