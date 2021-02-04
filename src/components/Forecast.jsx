import React, { Component } from 'react';

import '../assets/styles/components/Forecast.scss';

const URL_API ='http://api.openweathermap.org/data/2.5/forecast?q=Bogota&cnt=3&appid=590624b865634905117e752e1bc399b3';

class Forecast extends Component {

  constructor(props){
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: [],
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
      var par = await res.json();
      // console.log(par.list[0].pop)

      var par2 = await {...par.list}

      // console.log(par2);

      this.setState({
        loading: false,
        data: par2,
      })

    } catch (error) {
      this.setState({
        error: error,
        loading: false,
      })
    }
  }

  
  
  
  render() {

    const {data, loading, error} = this.state;

    const info = {...this.state.data}
    console.log(info);

    // console.log(data);

    if(loading === true && !data){
      return 0;
    }

    if(error){
      return 'error';
    }

    return (
      <div className="forecastContainer">
        {/* {info.map(function(x){
          return(
            <p>{x.main.temp}</p>
          )
        })} */}
      </div>
    )
  };
};

export default Forecast;