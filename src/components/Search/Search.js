import React, { Component } from "react";

export default class Search extends Component {
  state = {
    searchName: "",
    searchType: "movies"
  };

  componentDidMount = () => {
    const jsonName = localStorage.getItem("searchName");
    const searchName = JSON.parse(jsonName);

    const jsonType = localStorage.getItem("searchType");
    const searchType = JSON.parse(jsonType);

    this.setState({ searchName, searchType });
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchType, searchName } = this.state;

    this.props.getRecommendations(searchName, searchType);
  };

  render() {
    const { searchName, searchType } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={searchName}
            onChange={this.handleOnChange}
            name="searchName"
            placeholder="Search Item"
            required
          />
          <select
            value={searchType}
            onChange={this.handleOnChange}
            name="searchType"
          >
            <option value="music">Music</option>
            <option value="movies">Movies</option>
            <option value="shows">TV Shows</option>
            <option value="books">Books</option>
            <option value="games">Games</option>
            <option value="everything">Everything</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
