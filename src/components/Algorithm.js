// src/components/Algorithm.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { algorithms } from '../data/algorithm';

const Algorithm = () => {
  const { slug } = useParams();
  const algorithm = algorithms.find((algo) => algo.slug === slug);

  if (!algorithm) {
    return <div>Algorithm not found</div>;
  }

  return (
    <div>
      <h1>{algorithm.name}</h1>
      <p>Details about {algorithm.name}...</p>
      {/* Add more details about the algorithm here */}
    </div>
  );
};

export default Algorithm;
