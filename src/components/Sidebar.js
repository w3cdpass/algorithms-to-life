import React from 'react';
import { Link } from 'react-router-dom';
import { algorithms } from '../data/algorithms';

function Sidebar() {
  return (
    <div className="Sidebar">
      <h2>Algorithms</h2>
      <ul>
        {algorithms.map(algo => (
          <li key={algo.id}>
            <Link to={`/algorithm/${algo.id}`}>{algo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
