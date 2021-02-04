import React from 'react';

import '../assets/styles/components/Findings.scss';

export default function Findings() {
  return (
    <div className="findingsContainer">
      <div id="reviewers">
        <p>+ Top Reviews</p>
        <div className="friends">
          <div className="circles"></div>
          <div className="circles"></div>
          <div className="circles"></div>
          <div className="circles"></div>
        </div>
      </div>
      <div id="places">
        <p>Louvre Museum</p>
      </div>
      <div id="other">
        <p>Soumaya Museum</p>
        <div id="more">
          +
        </div>
      </div>
    </div>
  )
}
