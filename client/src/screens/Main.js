import React from 'react';
import ItemLink from '../components/ItemLink';
import Navbar from '../components/Navbar';

function Main() {
  React.useEffect(() => {
    return () => window.location.reload();
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-page">
        <div className="topics">
          <h1 className="topics-header">Topics</h1>
          <ul className="topics-list">
            <li className="topics-item">
              <span className="caret">Derivatives</span>
              <ul>
                <ItemLink item="Slope of a Tangent Line" />
                <ItemLink item="Definition of a Derivative" />
              </ul>
            </li>
            <li className="topics-item">
              <span className="caret">Integrals</span>
              <ul>
                <ItemLink item="Reimman sum 1" />
                <ItemLink item="Negative and Positive Area" />
                <ItemLink item="Polar Area" />
                <ItemLink item="Arc Length of a Function" />
              </ul>
            </li>
            <li className="topics-item">
              <span className="caret">3D Volumes and Vectors</span>
              <ul>
                <ItemLink item="Graph of square root rotated about x-axis" />
                <ItemLink item="3D vectors" />
              </ul>
            </li>
            <li className="topics-item">
              <span className="caret">Differential Equations</span>
              <ul>
                <ItemLink item="Euler's Method" />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
