import React, { useState } from 'react';
import '../Kyc/styles.css';

const KycForm = () => {
  const [country, setCountry] = useState('India');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the value of the Aadhar number input
    const aadharNumber = document.getElementById('aadhar-number')?.value;

    // Validate Aadhar number format
    const aadharRegex = /^\d{12}$/;
    if (country === 'India' && !aadharRegex.test(aadharNumber)) {
      setStatusMessage('Please enter a valid 12-digit Aadhar number.');
      return;
    }

    // Placeholder for form submission logic
    setStatusMessage('Your KYC update request has been submitted.');
  };

  return (
    <div className="container">
      <h1>KYC Verification</h1>
      <form id="kyc-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <div className="form-group">
              <label htmlFor="country">Select Country:</label>
              <select id="country" name="country" value={country} onChange={handleCountryChange} required>
                <option value="India">India</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {country === 'India' && (
              <div id="aadhar-details" className="form-group">
                <label htmlFor="aadhar-number">Aadhar Card Number/Passport Number:</label>
                <input 
                  type="text" 
                  id="aadhar-number" 
                  name="aadhar-number" 
                  pattern="\d{12}" 
                  title="Aadhar number must be a 12-digit number" 
                  required 
                />
                <label htmlFor="aadhar-front">Upload Aadhar Card Front Image:</label>
                <input type="file" id="aadhar-front" name="aadhar-front" accept=".jpg, .jpeg, .png" />
                <label htmlFor="aadhar-back">Upload Aadhar Card Back Image:</label>
                <input type="file" id="aadhar-back" name="aadhar-back" accept=".jpg, .jpeg, .png" />
              </div>
            )}

            {country !== 'India' && (
              <div id="passport-details" className="form-group">
                <label htmlFor="passport-number">Passport Number:</label>
                <input type="text" id="passport-number" name="passport-number" />
                <label htmlFor="passport-upload">Upload Passport:</label>
                <input type="file" id="passport-upload" name="passport-upload" accept=".jpg, .jpeg, .png" />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="selfie-upload">Selfie Image:</label>
              <input type="file" id="selfie-upload" name="selfie-upload" accept=".jpg, .jpeg, .png" required />
            </div>
          </div>

          <div className="column">
            <div className="form-group">
              <label htmlFor="address-proof">Select Address Proof:</label>
              <select id="address-proof" name="address-proof" required>
                <option value="Aadhar Card">Aadhar Card</option>
                <option value="Passport">Passport</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="address-proof-upload">Upload Address Proof:</label>
              <input type="file" id="address-proof-upload" name="address-proof-upload" accept=".jpg, .jpeg, .png" required />
            </div>
          </div>
        </div>

        <div className="form-group">
          <button type="submit">Verify</button>
        </div>
      </form>
      <div id="status" className="status">
        {statusMessage}
      </div>
    </div>
  );
};

export default KycForm;
