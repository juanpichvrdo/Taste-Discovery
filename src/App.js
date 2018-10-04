import React, { Component } from "react";
import Loader from "react-loader";

import "./App.css";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Recommendations from "./components/Recommendations/Recommendations";

class App extends Component {
  state = {
    searchName: "",
    searchType: "",
    recommendations: [],
    loaded: false
  };

  componentDidMount = () => {
    const jsonRec = localStorage.getItem("recommendations");
    const recommendations = JSON.parse(jsonRec);

    const jsonName = localStorage.getItem("searchName");
    const searchName = JSON.parse(jsonName);

    const jsonType = localStorage.getItem("searchType");
    const searchType = JSON.parse(jsonType);

    this.setState({ recommendations, searchName, searchType, loaded: true });
  };

  componentDidUpdate = () => {
    const recommendations = JSON.stringify(this.state.recommendations);
    const searchName = JSON.stringify(this.state.searchName);
    const searchType = JSON.stringify(this.state.searchType);

    localStorage.setItem("recommendations", recommendations);
    localStorage.setItem("searchName", searchName);
    localStorage.setItem("searchType", searchType);
  };

  getRecommendations = async (searchInput, mediaType) => {
    this.setState({
      loaded: false
    });

    if (!searchInput) {
      this.setState({
        loaded: true
      });
    } else {
      this.setState({ emptyInput: false });
    }

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl =
      mediaType !== "everything"
        ? `https://tastedive.com/api/similar?k=${
            process.env.REACT_APP_API_KEY
          }&q=${searchInput}&type=${mediaType}&info=1`
        : `https://tastedive.com/api/similar?k=${
            process.env.REACT_APP_API_KEY
          }&q=${searchInput}&info=1`;

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
        this.setState({
          searchType: "Everything"
        });
      }

      console.log(this.state.recommendations);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { searchName, searchType, recommendations, loaded } = this.state;
    return (
      <div>
        <Header />
        <Search getRecommendations={this.getRecommendations} />
        <Loader loaded={loaded}>
          {recommendations.length > 0 ? (
            <Recommendations
              searchName={searchName}
              searchType={searchType}
              recommendations={recommendations}
            />
          ) : (
            <h2>Couldn't find anything :/</h2>
          )}
        </Loader>
      </div>
    );
  }
}

export default App;
