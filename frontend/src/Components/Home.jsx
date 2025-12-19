import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from './Navbar';
import '../Home.css';

const Home = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleClick = async () => {
    if(!url) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:3000/analyze", { url });
      navigate("/results", { state: { results: response.data, url } });
    } catch (error) {
      setError("Analysis failed. Please check the URL or server status.");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="page-wrapper split-layout">
        
        {/* Left Side: Main Action */}
        <div className="hero-content">
          <h1>Make the Web <br /> Accessible.</h1>
          <p className="description">
            Instantly audit your website for WCAG compliance, SEO issues, and accessibility barriers using our advanced engine.
          </p>

          <div className="input-group">
            <input 
              type="url" 
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleClick()}
            />
            <button className="analyze-btn" onClick={handleClick}>
              {loading ? "Scanning..." : "Audit"}
            </button>
          </div>

          {error && <p className="error" style={{color: '#ef4444'}}>{error}</p>}
          
          <div className="samples">
            <span style={{color:'#64748b', marginRight:'10px'}}>Try:</span>
            <button className="sample-chip" onClick={() => setUrl('https://google.com')}>Google</button>
            <button className="sample-chip" onClick={() => setUrl('https://amazon.com')}>Amazon</button>
          </div>
        </div>

        {/* Right Side: Info Panel (Fills the empty space) */}
        <div className="info-panel">
          <div className="info-item">
            <div className="info-icon">A</div>
            <div className="info-text">
              <h4>WCAG 2.1 Standard</h4>
              <p>Checks against the latest web accessibility guidelines.</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">⚡</div>
            <div className="info-text">
              <h4>Instant Reports</h4>
              <p>Get a detailed breakdown of errors in seconds.</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon">PDF</div>
            <div className="info-text">
              <h4>Export Ready</h4>
              <p>Download professional PDF reports for your team.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;