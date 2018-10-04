import React, { Component } from "react";
import "./Search.css";

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
      <form onSubmit={this.handleSubmit} className="search">
        <div className="select-style">
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
        </div>
        <div className="relative">
          <input
            type="text"
            value={searchName}
            onChange={this.handleOnChange}
            name="searchName"
            placeholder={`Search ${searchType}`}
            required
          />
          <button type="submit">
            <i class="fas fa-search" />
          </button>
        </div>
      </form>
    );
  }
}
