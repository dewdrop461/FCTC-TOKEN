import React from 'react';
import '../Reports/Reports.css';

const Reports = () => {
  return (
    <div className="reports">
      <div className="header">
        <h1>Reports</h1>
        <div className="date-range">
          <input type="date" placeholder="dd-mm-yyyy" />
          <input type="date" placeholder="dd-mm-yyyy" />
        </div>
      </div>
      <div className="tabs">
        <button>Deposit History</button>
        <button>Withdraw History</button>
        <button>Staking Records</button>
        <button>Level Income</button>
        <button>Referral Income</button>
      </div>
      <div className="withdraw-history">
        <h2>Withdraw History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Withdrawal Method</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
