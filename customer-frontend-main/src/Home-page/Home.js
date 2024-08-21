import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import logo from './fctc.png';
import image1 from './Gemini_Generated_Image_2jrb6z2jrb6z2jrb.jpeg';
import image2 from './Gemini_Generated_Image_2jrb6y2jrb6y2jrb.jpeg';
import image3 from './Gemini_Generated_Image_2jrb702jrb702jrb.jpeg';
import visionImage from './v.jpeg';
import missionImage from './m.jpeg';

const Home = () => {
    // Function to handle FAQ toggle
    const toggleFAQ = (index) => {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems[index].classList.toggle('open');
    };

    return (
        <div className="background-container">
            <header className="header">
                <div className="header-content">
                    <nav className="nav">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#vision">Vision</a>
                        <a href="#mission">Mission</a>
                        <a href="#faq">FAQ</a>
                    </nav>
                </div>
            </header>

            <div className="login-register-buttons">
                <Link to="/login">Login</Link>
                <Link to="/register" className="register">Register</Link>
            </div>

            <section className="hero-section" id="home">
                <div className="logo">
                    <img src={logo} alt="FCTC TOKEN Logo" />
                </div>
                <div className="text-content">
                    <h1>Welcome to FCTC TOKEN</h1>
                    <p>Your gateway to advanced cryptocurrency trading solutions.</p>
                </div>
            </section>

            <section className="section" id="about">
                <h2>About</h2>
                <p>Future Crypto Torrent Coin (FCTC) is a UK-based cryptocurrency platform built on the Binance Smart Chain (BEP-20). Our customized blockchain integrates quantum resistance technology to enhance security. With our staking program, users can earn rewards while supporting our dynamic ecosystem. Experience advanced trading and staking with FCTC, designed to elevate your crypto experience.</p>
                <div className="image-container">
                    <img src={image1} alt="Blockchain GIF" className="small" />
                    <img src={image2} alt="Additional Image 1" />
                    <img src={image3} alt="Additional Image 2" />
                </div>
            </section>

            <section className="section" id="vision">
                <h2>Vision</h2>
                <p>Our vision is to connect farmers and consumers through a decentralized platform, making FCTC a leading global cryptocurrency known for security, usability, and positive impact. We aim to facilitate seamless transactions, reward sustainable farming, and enhance transparency in agriculture. By integrating blockchain technology, we seek to drive innovation and environmental stewardship, creating a cryptocurrency experience that benefits everyone.</p>
                <img src={visionImage} alt="Vision GIF" />
            </section>

            <section className="section" id="mission">
                <h2>Mission</h2>
                <p>Our mission is to increase economic freedom globally by transforming the agricultural industry through blockchain technology and the FCTC token. We aim to empower farmers and agricultural businesses with secure, transparent, and efficient transactions, enhancing financial inclusion and promoting sustainable farming practices. We are committed to supporting millions of farmers worldwide, helping them overcome daily challenges, improve their cultivation efforts, and contribute to a healthier and more prosperous global community.</p>
                <img src={missionImage} alt="Mission GIF" />
            </section>

            <section className="section" id="faq">
                <h2>FAQ</h2>
                <div className="faq-item" onClick={() => toggleFAQ(0)}>
                    <h3>1. What is FCTC Token?</h3>
                    <p>FCTC Token is a cryptocurrency built on the Binance Smart Chain (BEP-20) designed to connect farmers and consumers through a decentralized platform. It offers advanced security with quantum resistance technology and includes a staking program for earning rewards.</p>
                </div>
                <div className="faq-item" onClick={() => toggleFAQ(1)}>
                    <h3>2. How Does FCTC Work?</h3>
                    <p>FCTC operates on the Binance Smart Chain and utilizes quantum resistance technology to ensure security. Users can participate by buying and staking FCTC tokens, which helps support the network and rewards participants.</p>
                </div>
                <div className="faq-item" onClick={() => toggleFAQ(2)}>
                    <h3>3. Who Can Use FCTC?</h3>
                    <p>Anyone can use FCTC as long as they have access to a compatible cryptocurrency wallet and exchange. It’s designed to benefit farmers, consumers, and anyone interested in secure and transparent transactions within the agricultural sector.</p>
                </div>
                <div className="faq-item" onClick={() => toggleFAQ(3)}>
                    <h3>4. How Do I Start Earning FCTC?</h3>
                    <p>To start earning FCTC, you can buy tokens from supported exchanges and participate in our staking program. Staking involves locking up your tokens to support the network and earn rewards over time.</p>
                </div>
                <div className="faq-item" onClick={() => toggleFAQ(4)}>
                    <h3>5. Where Can I Find More Information About FCTC?</h3>
                    <p>For more information, visit our official website and read our whitepaper. You can also follow us on social media for updates and announcements.</p>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Future Crypto Torrent Coin. All rights reserved. <a href="#privacy">Privacy Policy</a></p>
            </footer>
        </div>
    );
};

export default Home;
