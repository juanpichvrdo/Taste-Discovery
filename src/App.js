import React, { Component } from "react";
import Loader from "react-loader";

import "./App.css";

import Search from "./components/Search/Search";
import Recommendations from "./components/Recommendations/Recommendations";

const apiKey = "320727-TasteLik-SK1UUNYY";

class App extends Component {
  state = {
    searchName: "",
    searchType: "",
    recommendations: [],
    loaded: false,
    error: false
  };

  componentDidMount = () => {
    const jsonRec = sessionStorage.getItem("recommendations");
    const recommendations = JSON.parse(jsonRec);

    const jsonName = sessionStorage.getItem("searchName");
    const searchName = JSON.parse(jsonName);

    const jsonType = sessionStorage.getItem("searchType");
    const searchType = JSON.parse(jsonType);

    this.setState({ recommendations, searchName, searchType, loaded: true });

    if (!this.state.recommendations) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  };

  componentDidUpdate = () => {
    const recommendations = JSON.stringify(this.state.recommendations);
    sessionStorage.setItem("recommendations", recommendations);

    const searchName = JSON.stringify(this.state.searchName);
    sessionStorage.setItem("searchName", searchName);

    const searchType = JSON.stringify(this.state.searchType);
    sessionStorage.setItem("searchType", searchType);
  };

  getRecommendations = async (searchInput, mediaType) => {
    this.setState({
      loaded: false
    });

    if (!searchInput) {
      this.setState({
        loaded: true
      });
    }

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl =
      mediaType !== "everything"
        ? `https://tastedive.com/api/similar?k=${apiKey}&q=${searchInput}&type=${mediaType}&info=1`
        : `https://tastedive.com/api/similar?k=${apiKey}&q=${searchInput}&info=1`;

    try {
      const response = await fetch(proxyUrl + apiUrl);
      const recommendations = await response.json();

      this.setState({
        searchName: recommendations.Similar.Info[0].Name,
        searchType: recommendations.Similar.Info[0].Type,
        recommendations: [...recommendations.Similar.Results],
        loaded: true
      });

      if (mediaType === "everything") {
        this.setState({ searchType: "Everything" });
      }

      if (this.state.searchType === "unknown") {
        this.setState({ error: true });
      } else {
        this.setState({ error: false });
      }

      console.log(this.state.recommendations);
    } catch (e) {
      console.log(e);
      this.setState({
        error: true
      });
    }
  };

  render() {
    const {
      searchName,
      searchType,
      recommendations,
      loaded,
      error
    } = this.state;
    return (
      <div>
        <div className="grid-container">
          <Search getRecommendations={this.getRecommendations} />
          <Loader loaded={loaded}>
            {recommendations && (
              <Recommendations
                searchName={searchName}
                searchType={searchType}
                recommendations={recommendations}
                error={error}
              />
            )}

            {error && (
              <h2 style={{ textAlign: "center", marginBottom: "50vh" }}>
                Couldn't find anything :/
              </h2>
            )}
          </Loader>
        </div>
      </div>
    );
  }
}

export default App;
