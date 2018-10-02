import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

class App extends Component {
  getRecommendations = async (searchInput, mediaType) => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl =
      mediaType !== "everything"
        ? `https://tastedive.com/api/similar?k=320727-TasteLik-SK1UUNYY&q=${searchInput}&type=${mediaType}&info=1`
        : `https://tastedive.com/api/similar?k=320727-TasteLik-SK1UUNYY&q=${searchInput}&info=1`;
    const response = await fetch(proxyUrl + apiUrl);

    const recommendations = await response.json();
    console.log(recommendations);
  };

  render() {
    return (
      <div>
        <Header />
        <Search getRecommendations={this.getRecommendations} />
      </div>
    );
  }
}

export default App;
