import React, { Component } from 'react';
import ReactDOM from "react-dom";


import '../assets/styles/components/Forecast.scss';

const URL_API ='http://api.openweathermap.org/data/2.5/forecast?q=Bogota&units=metric&cnt=3&appid=590624b865634905117e752e1bc399b3';

function CharacterCard(props) {
  const { character } = props;
  return (
    <div className="CharacterCard">
      <div className="forecastInfo">
        {character.main.temp}
      </div>
    </div>
  );
}

class Forecast extends Component {

  constructor(){
    super()
    this.state = {
      data: {
        list: {},
      },
      loading: true,
      error: null,
    };
  }



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
      var info = await res.json();
      // console.log(par.list[0].pop)

      this.setState({
        loading: false,
        data: info.list,
      })

    } catch (error) {
      this.setState({
        error: error,
        loading: false,
      })
    }
  };
  
  render() {
    const {data, loading, error} = this.state;

    const uno = {...this.state['data'][0]};
    const unoMain = {...uno.main};
    const unoWeather = (uno.weather);
    const unoDescription = {...unoWeather};
    const casidos = {...unoDescription[0]}

    const dos = {...this.state['data'][1]};
    const dosMain = {...dos.main};
    const dosWeather = (dos.weather);
    const dosDescription = {...dosWeather};
    const casitres = {...dosDescription[0]}

    const tres = {...this.state['data'][2]};
    const tresMain = {...tres.main};
    const tresWeather = (tres.weather);
    const tresDescription = {...tresWeather};
    const casicuatro = {...tresDescription[0]}


    if(this.state.error){
      return 'error';
    }

    return (
      <div className="forecastContainer">
        <div className="forecastItem">
          <p>{unoMain.temp_min}min / {unoMain.temp_max}max</p>
          <span>{casidos.description}</span>
        </div>
        <div className="forecastItem">
          <p>{dosMain.temp_min}min / {dosMain.temp_max}max</p>
          <span>{casitres.description}</span>
        </div>
        <div className="forecastItem">
          <p>{tresMain.temp_min}min / {tresMain.temp_max}max</p>
          <span>{casicuatro.description}</span>
        </div>
      </div>
    );
  };
};

export default Forecast;