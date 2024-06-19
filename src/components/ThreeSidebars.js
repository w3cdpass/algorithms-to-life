// src/components/ThreeSidebars.js
import React from 'react';
import { Link } from 'react-router-dom';
import { algorithms } from '../data/algorithm';
import '../styles/ThreeSidebars.css';

const ThreeSidebars = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Algorithms</h2>
        <ul>
          {algorithms.map((algo) => (
            <li key={algo.slug}>
              <Link to={`/algorithm/${algo.slug}`}>{algo.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar">
        <h2>Sidebar 2</h2>
        <p>Content goes here...</p>
      </div>
      <div className="sidebar">
        <h2>Sidebar 3</h2>
        <p>Content goes here...</p>
      </div>
    </div>
  );
};

export default ThreeSidebars;
