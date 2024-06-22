// src/components/Algorithm.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { algorithms } from '../data/algorithm';
import '../styles/Algorithm.css'; // Import the CSS file for Algorithm component styling

const findAlgorithmBySlug = (slug, categories) => {
  for (const category of categories) {
    const algorithm = category.items.find((item) => item.slug === slug);
    if (algorithm) {
      return algorithm;
    }
  }
  return null;
};

const Algorithm = () => {
  const { slug } = useParams();
  const algorithm = findAlgorithmBySlug(slug, algorithms);

  if (!algorithm) {
    return <div>Algorithm not found</div>;
  }

  return (
    <div className="algorithm-container">
      <div className="fixed-content">
        <h1>{algorithm.name}</h1>
        <p>Details about {algorithm.name}...</p>
        {/* Add more details about the algorithm here */}
      </div>
    </div>
  );
};

export default Algorithm;
