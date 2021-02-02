import React from 'react';
import '../assets/styles/components/Location.scss';

const URL_API = 'http://api.openweathermap.org/data/2.5/weather?q=Bogota&units=metric&appid=590624b865634905117e752e1bc399b3';

class Location extends React.Component {

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
      const par = await res.json();
      console.log(par);

      this.setState({
        loading: false,
        data: par,
      })

      return par;
      
    } catch (error) {
      this.setState({
        error: error,
        loading: false,
      })
    }
  }

  render() {

    if(this.state.loading === true && !this.state.data){
      return 0;
    }

    if(this.state.error){
      return 'error';
    }

    return (
      <div className="locationContainer">
        <h1>{this.state.data.name}</h1>
        {/* {this.state['data']['main'][0]} */}
        {/* console.log(`${this.state.data}`); */}
        {/* {this.state.data.main.temp} */}
      </div>
    )
  };
};

export default Location;