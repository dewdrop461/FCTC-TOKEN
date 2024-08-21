// src/DailyIntroducerReward.js
import React from 'react';
import '../DailyIntroducerReward/DailyIntroducerReward.css';

const DailyIntroducerReward = () => {
  // Mock data for demonstration
  const dailyRewards = [
  
  ];

  return (
    <div className="daily-introducer-reward-container">
      <h1 className="title">Daily Introducer Reward</h1>
      <table className="reward-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Date</th>
            <th>Reward (FCTC)</th>
          </tr>
        </thead>
        <tbody>
          {dailyRewards.map((reward, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{reward.date}</td>
              <td>{reward.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyIntroducerReward;
