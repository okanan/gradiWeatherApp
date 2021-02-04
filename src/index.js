import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.jsx';

import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";

// import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.render(
    <App />,
  document.getElementById('root')
);