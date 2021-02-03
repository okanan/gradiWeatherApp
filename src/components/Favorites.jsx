import React, { Component } from 'react';

import '../assets/styles/components/Favorites.scss';

const URL_API = 'http://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=590624b865634905117e752e1bc399b3';

export default class Favorites extends Component {
  state = {
    loading: true,
    error: null,
    data: {},
  };


  componentDidMount(){
    this.fetchData();
  }

  fetchData = async ()  => {
    this.setState({
      loading: true,
      error: null,
    })

    try {
      const res = await fetch(URL_API);
      var par = await res.json();
      console.log(par);
      console.log(par.main.temp);

      this.setState({
        loading: false,
        data: par,
      })
      // return par;
      
    } catch (error) {
      this.setState({
        error: error,
        loading: false,
      })
    }
  }

  render() {

    const info = {...this.state.data.main};

    if(this.state.loading === true && !this.state.data){
      return 0;
    }

    if(this.state.error){
      return 'error';
    }

    return (
      <div className="favoritesContainer">
        <div className="favoriteCard" id="paris">
          <div className="cardBg">
            <h1>{this.state.data.name}</h1>
            <h2>{info.temp}°</h2>
          </div>
        </div>
        <div className="favoriteCard" id="addFavorite">
          <button>Add location</button>
        </div>
      </div>
    )
  };
};