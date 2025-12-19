import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Score from "./AccessibilityScore";
import DownloadReportButton from "./DownloadReportButton";
import Navbar from "./Navbar";
import '../Home.css';

const Results = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.results) {
    return (
        <>
            <Navbar />
            <div className="page-wrapper">
                <p>No results found.</p>
                <button className="analyze-btn" onClick={() => navigate("/")}>New Scan</button>
            </div>
        </>
    );
  }

  const { results, url } = state;
  
  // Calculate Score logic
  const calculateScore = (violations) => {
    const weights = { minor: 1, moderate: 2, serious: 4, critical: 6 };
    let penalty = 0;
    violations.forEach(v => penalty += (weights[v.impact] || 1));
    return Math.max(0, 100 - penalty);
  };
  
  const score = calculateScore(results.violations);

  return (
    <>
      <Navbar />
      <div className="page-wrapper split-layout">
        
        {/* Left Column: The Details */}
        <div className="main-results">
            <div className="results-header">
                <h2>Audit Report for <span className="results-url">{new URL(url).hostname}</span></h2>
                <p style={{color:'#94a3b8'}}>Found {results.violations.length} accessibility issues</p>
            </div>

            <div className="violations-list">
                {results.violations.length === 0 ? (
                    <div className="violation-card">
                        <h3>🎉 No Issues Found</h3>
                        <p>This page passed all automated checks.</p>
                    </div>
                ) : (
                    results.violations.map((v, idx) => (
                        <div key={idx} className="violation-card">
                            <span className={`badge ${v.impact}`}>{v.impact}</span>
                            <h3 style={{marginTop:0}}>{v.help}</h3>
                            <p style={{color:'#cbd5e1'}}>{v.description}</p>
                            <a href={v.helpUrl} target="_blank" style={{color:'#6366f1'}}>How to fix →</a>
                        </div>
                    ))
                )}
            </div>
        </div>

        {/* Right Column: Sticky Score & Actions */}
        <div className="sticky-sidebar">
            <div className="score-card">
                <Score score={score} />
                <div style={{margin: '20px 0'}}>
                   <DownloadReportButton results={results} url={url} />
                </div>
                <button 
                    onClick={() => navigate('/')} 
                    style={{background:'transparent', border:'1px solid #334155', color:'#94a3b8', padding:'8px 16px', borderRadius:'6px', cursor:'pointer'}}
                >
                    Start New Scan
                </button>
            </div>

            <div className="info-panel" style={{marginTop:'20px', padding:'20px'}}>
                <h4 style={{marginTop:0}}>Summary</h4>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px', fontSize:'0.9rem'}}>
                    <span>Critical Issues</span>
                    <span style={{color:'#ef4444', fontWeight:'bold'}}>
                        {results.violations.filter(v => v.impact === 'critical').length}
                    </span>
                </div>
                <div style={{display:'flex', justifyContent:'space-between', fontSize:'0.9rem'}}>
                    <span>Serious Issues</span>
                    <span style={{color:'#f59e0b', fontWeight:'bold'}}>
                        {results.violations.filter(v => v.impact === 'serious').length}
                    </span>
                </div>
            </div>
        </div>

      </div>
    </>
  );
};

export default Results;