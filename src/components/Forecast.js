import React from "react";

class Forecast extends React.Component {
    render() {
        return(
            <div className="forecast-container">
                { this.props.error && <span className="error">{this.props.error}</span> }
                { this.props.city && this.props.country && <h3 className="forecast-title">{this.props.city}, {this.props.country}</h3> }
                { this.props.description && <p className="current-description">{this.props.description}</p> }
                { this.props.tempCurrent && <p className="current-temperature">{this.props.tempCurrent}°C</p> }
                { this.props.tempHi && this.props.tempLo && <p className="current-hi-lo">High: {this.props.tempHi}°C, Low: {this.props.tempLo}°C</p> }
                { this.props.humidity && <p className="humidity">Humidity: {this.props.humidity}%</p> }
                {this.props.windSpeed && <p className="wind">Wind: {this.props.windSpeed} KPH</p> }
            </div>
        );
    }
}

export default Forecast;