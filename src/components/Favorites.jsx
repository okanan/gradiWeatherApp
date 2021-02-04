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

      // console.log(par.weather[0]['description']);

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
    const wind = {...this.state.data.wind};
    const weather = {...this.state.data.weather};
    // const weatherObject = Object.assign({}, weather);
    const weatherObject = {...weather[0]};
    // console.log(weatherObject);

    if(this.state.loading === true && !this.state.data){
      return 0;
    }

    if(this.state.error){
      return 'error';
    }

    return (
      <div className="favoritesContainer">
        <div className="favoriteCard" id="paris">
          <div id="iconWeather">
            ps
          </div>
          <div id="cityWeather">
            <h1>{info.temp}°</h1>
            <h3>{this.state.data.name}</h3>
          </div>
          <div id="cityHumedity">
            <p>Humidity {info.humidity}%</p>
            <p>{weatherObject.description}</p>
            <p>{wind.speed}km/h</p>
          </div>
        </div>
        <div className="favoriteCard" id="addFavorite">
          <button>Add location</button>
        </div>
      </div>
    )
  };
};