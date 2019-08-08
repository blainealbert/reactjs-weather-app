import React from "react";
import "./App.css";

import Headline from "./components/Headline.js";
import Search from "./components/Search.js";
import Forecast from "./components/Forecast.js";

const OW_API_KEY = "a49864adbaac49db5c8db9431b97702b";

class App extends React.Component{
  state = {
    city: undefined, 
    country: undefined, 
    humidity: undefined, 
    pressure: undefined, 
    tempCurrent: undefined, 
    tempHi: undefined, 
    tempLo: undefined, 
    description: undefined, 
    windSpeed: undefined,
    error: undefined
  }
  
  //Fetch JSON for weather forecast
  getForecast =  async (e) => {
    e.preventDefault();
    const searchCity = e.target.elements.city.value;
    const searchCountry = e.target.elements.country.value;
    const api_call = await fetch(`  http://api.openweathermap.org/data/2.5/weather?q=${searchCity},${searchCountry}&appid=${OW_API_KEY}&units=metric`);
    const data = await api_call.json();
    //Only display values when fields are entered
    if(searchCity && searchCountry){
      this.setState({
        city: data.name, country: data.sys.country, humidity: data.main.humidity, pressure: data.main.pressure, tempCurrent: data.main.temp, tempHi: data.main.temp_max, tempLo: data.main.temp_min, description: data.weather[0].description, windSpeed: data.wind.speed, error: data.message
      });
    }
    else{
      this.setState({
        city: undefined, country: undefined, humidity: undefined, pressure: undefined, tempCurrent: undefined, tempHi: undefined, tempLo: undefined, description: undefined, windSpeed: undefined, error: 'Please fill all of the fields.'
      });
    }
  }
  render() {
    return(
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container weather-widget-container">
              <div className="row">
                <div className="col-lg-12">
                  <Headline />
                  <Search getForecast={this.getForecast}/>
                  <Forecast 
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                    tempCurrent={this.state.tempCurrent}
                    tempHi={this.state.tempHi}
                    tempLo={this.state.tempLo}
                    description={this.state.description}
                    windSpeed={this.state.windSpeed}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;