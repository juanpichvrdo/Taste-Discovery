import React, { Component } from "react";

export default class Search extends Component {
  state = {
    searchInput: "",
    mediaType: "movies"
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { mediaType, searchInput } = this.state;

    this.props.getRecommendations(searchInput, mediaType);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.handleOnChange}
            name="searchInput"
            placeholder="Pulp Fiction"
          />
          <select
            value={this.state.mediaType}
            onChange={this.handleOnChange}
            name="mediaType"
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
