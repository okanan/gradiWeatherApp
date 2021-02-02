import React from 'react';

import '../assets/styles/App.scss';
import '../assets/styles/Tablet.scss';
import '../assets/styles/Desktop.scss';
// import '../assets/styles/Phone.scss';

import Location from '../components/Location.jsx';
import Forecast from '../components/Forecast.jsx'
import Visit from '../components/Visit.jsx';
import Findings from '../components/Findings.jsx';
import Favorites from '../components/Favorites.jsx';


function App() {
  return (
    <div className="App">
      <div id="location">
        <Location/>
      </div>
      <span id="titleOne" className="forecastTitle"><strong>3 days</strong> forecast</span>
      <div id="forecast">
        <Forecast/>
      </div>
      <span id="titleTwo" className="forecastTitle"><strong>Place to</strong> visit</span>
      <div id="visit"><Visit/></div>
      <div id="findings"><Findings/></div>
      <div id="favorites"><Favorites/></div>
    </div>
  );
}

export default App;
