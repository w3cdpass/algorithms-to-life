// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThreeSidebars from './components/ThreeSidebars';
import Algorithm from './components/Algorithm';
import './styles/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ThreeSidebars />
        <Routes>
          {/* Add routes for algorithms */}
          <Route path="/algorithm/:slug" element={<Algorithm />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
