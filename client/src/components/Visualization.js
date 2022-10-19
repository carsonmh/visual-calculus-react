import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import urlToSketch from '../utils/urlToSketch';

function Visualization({ item }) {
  return (
    <div id="canvas-holder">
      <ErrorBoundary>{urlToSketch[item]}</ErrorBoundary>
    </div>
  );
}

export default Visualization;
