import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AlgorithmExample from '../components/AlgorithmExample';
import Usage from '../components/Usage';
import CodeViewer from '../components/CodeViewer';
import { algorithms } from '../data/algorithms';
import BubbleSortAnimation from '../components/BubbleShortAnimation';
import './AlgorithmPage.css';

function AlgorithmPage() {
  const { id } = useParams();
  const algorithm = algorithms.find(algo => algo.id === id);

  if (!algorithm) {
    return <div>Algorithm not found</div>;
  }

  return (
    <div className="AlgorithmPage">
      <Sidebar />
      <div className="content">
        <h1>{algorithm.name}</h1>
        <div className="animation-and-details">
          <BubbleSortAnimation />
          <div className="details">
            <AlgorithmExample example={algorithm.example} />
            <Usage usage={algorithm.usage} />
            <CodeViewer code={algorithm.code} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlgorithmPage;
