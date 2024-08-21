import React, { useState } from 'react';
import axios from 'axios';

const OTPVerification = () => {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [isOTPSent, setIsOTPSent] = useState(false);

    const handleSendOTP = async () => {
        try {
            const response = await axios.post('/api/auth/generate-otp', { mobile });
            if (response.data.message === 'OTP sent successfully') {
                setIsOTPSent(true);
                alert('OTP sent successfully');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            alert('Error sending OTP');
        }
    };

    const handleVerifyOTP = async () => {
        try {
            const response = await axios.post('/api/auth/verify-otp', { mobile, otp });
            if (response.data.message === 'OTP verified successfully') {
                alert('OTP verified successfully');
                // Proceed to the next step, e.g., registration or login
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert('Error verifying OTP');
        }
    };

    return (
        <div>
            <h2>OTP Verification</h2>
            <div>
                <label>Mobile Number:</label>
                <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter mobile number"
                    required
                />
                <button onClick={handleSendOTP} disabled={isOTPSent}>
                    Send OTP
                </button>
            </div>
            {isOTPSent && (
                <div>
                    <label>Enter OTP:</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        required
                    />
                    <button onClick={handleVerifyOTP}>
                        Verify OTP
                    </button>
                </div>
            )}
        </div>
    );
};

export default OTPVerification;
