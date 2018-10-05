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
    const opts = {
      height: "390",
      width: "640"
    };
    return (
      <div>
        <div className="heading">
          <Link to="/">
            {" "}
            <i class="fas fa-long-arrow-alt-left back" />{" "}
          </Link>
          <h1 className="main-heading">
            {" "}
            {name} - {type}
          </h1>
        </div>

        {videoID && (
          <React.Fragment>
            <Loader loaded={this.state.loaded} />
            <YouTube
              videoId={videoID}
              onReady={() =>
                this.setState({
                  loaded: true
                })
              }
              opts={
                opts // containerClassName={string} // className={string}
              }
            />
          </React.Fragment>
        )}

        {info ? <p> {info} </p> : <p>No additional info</p>}
        <a href={wiki} target="_blank" rel="noopener noreferrer">
          Wikipedia Page
        </a>
      </div>
    );
  }
}

export default RecommendationDetails;
