import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Profile from './pages/Profile';

const App = () => {
    return (
        <Router>
            {/* <nav>
                <Link to="/">Home</Link> | <Link to="/src/pages/History.js">History</Link> | <Link to="/src/pages/Profile.js">Profile</Link>
            </nav> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
