import React, { Component } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import Loader from "react-loader";

import "./recommendationDetails.css";

class RecommendationDetails extends Component {
  state = {
    loaded: false
  };

  render() {
    const { name, type, info, wiki, videoID } = this.props.location.state;
    return (
      <div>
        <div className="recommendation-heading">
          <h1>{name}</h1>
          <h3>{type}</h3>
        </div>

        {info && (
          <p className="info">
            {" "}
            {info.substring(0, 600)}
            ...
          </p>
        )}

        <div className="link-container">
          <a
            href={wiki}
            target="_blank"
            rel="noopener noreferrer"
            className="wiki-link"
          >
            Wikipedia Page{" "}
            <i className="fas fa-arrow-right" style={{ marginLeft: ".5rem" }} />
          </a>
        </div>

        {videoID && (
          <React.Fragment>
            <Loader loaded={this.state.loaded} className="loader" />
            <YouTube
              videoId={videoID}
              onReady={() =>
                this.setState({
                  loaded: true
                })
              }
              className="youtube"
            />
          </React.Fragment>
        )}

        <div className="link-container">
          <Link to="/">
            {" "}
            <i class="fas fa-arrow-circle-left back-icon" />{" "}
          </Link>
        </div>
      </div>
    );
  }
}

export default RecommendationDetails;
