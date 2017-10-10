import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <form className="input-group">
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

export default SearchBar;
