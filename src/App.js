import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AlgorithmPage from './pages/AlgorithmPage';
import './styles/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/algorithm/:id" element={<AlgorithmPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
