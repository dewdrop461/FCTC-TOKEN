import React, { useEffect, useState } from 'react';
import '../UserInfo/userinfo.css';

const UserInfo = () => {
  const [user, setUser] = useState({
    userId: 'Loading...',
    fullName: 'Loading...',
    email: 'Loading...',
    joinedDate: 'Loading...'
  });

  // Replace this useEffect with actual data fetching logic
  useEffect(() => {
    // Simulating fetching data
    const fetchedUser = {
    };
    setUser(fetchedUser);
  }, []);

  return (
    <div className="user-info-container">
      <header>
        <div className="logo">
        <img src={require("./fctc.png")} alt="Logo" className="logo" width="100"height="80px" />
        </div>
        <h1>User Information</h1>
      </header>
      <main>
        <div className="user-details">
          <h2>Profile</h2>
          <p><strong>User ID:</strong> <span>{user.userId}</span></p>
          <p><strong>Full Name:</strong> <span>{user.fullName}</span></p>
          <p><strong>Email:</strong> <span>{user.email}</span></p>
          <p><strong>Joined Date:</strong> <span>{user.joinedDate}</span></p>
        </div>
        <div className="crypto-details">
          <h2>Cryptocurrency Details</h2>
          <ul>
          </ul>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 FCTC Token. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserInfo;
