import React from 'react';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <div className="HomePage">
      <Sidebar />
      <div className="content">
        <h1>Welcome to Algorithm Visualizer</h1>
        <p>Select an algorithm to see details.</p>
      </div>
    </div>
  );
}

export default HomePage;
