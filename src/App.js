import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Recommendations from "./components/Recommendations/Recommendations";

class App extends Component {
  state = {
    searchName: "",
    searchType: "",
    recommendations: []
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recommendations");
    const recommendations = JSON.parse(json);
    this.setState({ recommendations });
  };

  componentDidUpdate = () => {
    const recommendations = JSON.stringify(this.state.recommendations);
    localStorage.setItem("recommendations", recommendations);
  };

  getRecommendations = async (searchInput, mediaType) => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl =
      mediaType !== "everything"
        ? `https://tastedive.com/api/similar?k=320727-TasteLik-SK1UUNYY&q=${searchInput}&type=${mediaType}&info=1`
        : `https://tastedive.com/api/similar?k=320727-TasteLik-SK1UUNYY&q=${searchInput}&info=1`;

    const response = await fetch(proxyUrl + apiUrl);
    const recommendations = await response.json();

    this.setState({
      searchName: recommendations.Similar.Info[0].Name,
      searchType: recommendations.Similar.Info[0].Type,
      recommendations: [...recommendations.Similar.Results]
    });

    if (mediaType === "everything") {
      this.setState({
        searchType: "Everything"
      });
    }

    console.log(this.state.recommendations);
  };

  render() {
    const { searchName, searchType, recommendations } = this.state;
    return (
      <div>
        <Header />
        <Search getRecommendations={this.getRecommendations} />
        {recommendations.length > 0 && (
          <Recommendations
            searchName={searchName}
            searchType={searchType}
            recommendations={recommendations}
          />
        )}
      </div>
    );
  }
}

export default App;
