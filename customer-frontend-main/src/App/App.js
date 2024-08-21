import React from 'react';
import '../App/App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard/dashboard';
import MainWallet from '../MainWallet/mainwallet';
import StackedCoins from '../StackedCoins/StackedCoins';
import StakingCards from '../StakingPlans/StakingPlans';
import DailyIntroducerReward from '../DailyIntroducerReward/DailyIntroducerReward';
import IntroducerReward from '../IntroducerReward/IntroducerReward';
import DailyStakingBonus from '../DailyStakingBonus/DailyStakingBonus';
import LevelIncomePage from '../LevelIncomePage/LevelIncomePage';
import DailyCommunityReward from '../DailyCommunityReward/DailyCommunityReward';
import DailyEarnings from '../DailyEarnings/DailyEarnings';
import TotalEarningsDashboard from '../TotalEarningsDashboard/TotalEarningsDashboard';
import ComingSoon from '../ComingSoon/ComingSoon';
import UserInfo from '../UserInfo/UserInfo';
import KycForm from '../Kyc/KycForm';
import ChangePassword from '../ChangePassword/ChangePassword';
import Deposit from '../Deposit/Deposit';
import ReferralProgram from '../RefferalProgram/ReferralProgram';
import Reports from '../Reports/Reports';
import Login from '../Home-page/Login';
import Layout from '../Layout/Layout';
import Home from '../Home-page/Home';  // Import the new Home component
import Register from '../Home-page/Register'; // Import the Register component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/StackedCoins" element={<Layout><StackedCoins /></Layout>} />
        <Route path="/stakingBonus" element={<Layout><StakingCards /></Layout>} />
        <Route path="/dailyStakingBonus" element={<Layout><DailyStakingBonus /></Layout>} />
        <Route path="/DailyIntroducerReward" element={<Layout><DailyIntroducerReward /></Layout>} />
        <Route path="/IntroducerReward" element={<Layout><IntroducerReward /></Layout>} />
        <Route path="/LevelIncomePage" element={<Layout><LevelIncomePage /></Layout>} />
        <Route path="/DailyCommunityReward" element={<Layout><DailyCommunityReward /></Layout>} />
        <Route path="/DailyEarnings" element={<Layout><DailyEarnings /></Layout>} />
        <Route path="/TotalEarningsDashboard" element={<Layout><TotalEarningsDashboard /></Layout>} />
        <Route path="/ComingSoon" element={<Layout><ComingSoon /></Layout>} />
        <Route path="/userinfo" element={<Layout><UserInfo /></Layout>} />
        <Route path="/KycForm" element={<Layout><KycForm /></Layout>} />
        <Route path="/ChangePassword" element={<Layout><ChangePassword /></Layout>} />
        <Route path="/ReferralProgram" element={<Layout><ReferralProgram /></Layout>} />
        <Route path="/Reports" element={<Layout><Reports /></Layout>} />

        {/* Pages without Layout (e.g., Withdraw, Deposit) */}
        <Route path="/withdraw" element={<MainWallet />} />
        <Route path="/Deposit" element={<Deposit />} />

        {/* Redirect all unknown paths to the home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
