import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </thead>

        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>

      </table>
    );
  }

}

// Passes redux state items as props to be used by this class
function mapStateToProps( {weather} ) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
