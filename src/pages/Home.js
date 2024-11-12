import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './stlyes/Home.css';

const Home = () => {
    const [user, setUser] = useState(null); // State to hold user data
    const [balance, setBalance] = useState(0.0); // State to hold available balance

    useEffect(() => {
        // Simulate API call to get user data
        async function fetchUserData() {
            // Replace this with an actual API call, if available
            const userData = {
                name: 'user',
                balance: 0.00,
                referralCommission: 0.00,
            };
            
            setUser(userData); // Set user data in state
            setBalance(userData.balance); // Set balance in state
        }

        fetchUserData();
    }, []);

    if (!user) return <p>Loading...</p>; // Show loading if user data isn't fetched yet

    return (
        <div className="home-container">
            <header className="greeting">
                <div className="profile-pic">AS</div>
                <h2>Hi, {user.name}</h2>
            </header>

            <div className="balance-section">
                <div className="balance">
                    <p>Available Balance</p>
                    <h3>₦{balance.toFixed(2)}</h3>
                </div>
                <div className="referral">
                    <p>Referral Commission</p>
                    <h3>₦{user.referralCommission.toFixed(2)}</h3>
                </div>
                <button className="add-money">Add Money</button>
                <button className="transaction-history">Transaction History</button>
            </div>

            <div className="actions">
                <button className="telegram-stars">Telegram Stars ⭐</button>
                <button className="buy-gas-fee">Buy Gas Fee ➕</button>
            </div>

            <div className="token-list">
                {/* Placeholder data for tokens */}
                <div className="token">
                    <div className="token-icon">TON</div>
                    <div className="token-details">
                        <h4>Toncoin</h4>
                        <p>$5.46 <span className="green">+0.95%</span></p>
                    </div>
                </div>
                <div className="token">
                    <div className="token-icon">SOL</div>
                    <div className="token-details">
                        <h4>Solana</h4>
                        <p>$213.10 <span className="red">-2.68%</span></p>
                    </div>
                </div>
                <div className="token">
                    <div className="token-icon">ETH</div>
                    <div className="token-details">
                        <h4>Ethereum</h4>
                        <p>$2,387.45 <span className="green">+1.20%</span></p>
                    </div>
                </div>
            </div>

            <footer className="bottom-nav">
    <nav>
        <Link to="/">Home</Link> | 
        <Link to="/src/pages/History.js">History</Link> | 
        <Link to="/src/pages/Profile.js">Profile</Link>
    </nav>
</footer>
        </div>
    );
};

export default Home;
