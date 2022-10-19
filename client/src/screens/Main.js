import React from 'react';
import ItemLink from '../components/ItemLink';

function Main() {
  return (
    <div class="main-page">
      <div class="topics">
        <h1 class="topics-header">Topics</h1>
        <ul class="topics-list">
          <li class="topics-item">
            <span class="caret">Derivatives</span>
            <ul>
              <ItemLink item="Slope of a Tangent Line" />
              <ItemLink item="Definition of a Derivative" />
            </ul>
          </li>
          <li class="topics-item">
            <span class="caret">Integrals</span>
            <ul>
              <ItemLink item="Reimman sum 1" />
              <ItemLink item="Negative and Positive Area" />
              <ItemLink item="Polar Area" />
              <ItemLink item="Arc Length of a Function" />
            </ul>
          </li>
          <li class="topics-item">
            <span class="caret">3D Volumes and Vectors</span>
            <ul>
              <ItemLink item="Graph of square root rotated about x-axis" />
              <ItemLink item="3D vectors" />
            </ul>
          </li>
          <li class="topics-item">
            <span class="caret">Differential Equations</span>
            <ul>
              <ItemLink item="Euler's Method" />
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
