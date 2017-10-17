import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit = (event) => {
    //Prevent the form from submitting
    event.preventDefault();

    //Fetch weather data here
    this.props.fetchWeather(this.state.searchTerm);
    this.setState({ searchTerm: '' });
    console.log(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a 5 day forcast in your favorite cities"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
