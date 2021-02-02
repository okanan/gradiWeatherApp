import React, { Component } from 'react';

import '../assets/styles/components/Favorites.scss';

export default class Favorites extends Component {
  render() {
    return (
      <div className="favoritesContainer">
        <div className="added"></div>
        <div className="toAdd"></div>        
      </div>
    )
  }
}
