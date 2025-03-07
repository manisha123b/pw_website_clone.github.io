import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // Import Link
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Courses from './Courses';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo">
            <img src="/logo.jpg" alt="PW Logo" />
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/study-material">Study Material</Link></li>
              <li><Link to="/test-series">Test Series</Link></li>
              <li><Link to="/courses">Courses</Link></li>
            </ul>
          </nav>
          <button className="btn login-btn"><Link to="/login">Login/Register</Link></button>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </div>
  );
}

export default App;
