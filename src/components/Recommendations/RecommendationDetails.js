import React, { Component } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

class RecommendationDetails extends Component {
  render() {
    const { name, type, info, wiki, videoID } = this.props.location.state;
    const opts = {
      height: "390",
      width: "640"
    };
    return (
      <div>
        <Link to="/">Back</Link>
        <h1> {name} </h1>
        <h2> {type} </h2>
        <p> {info} </p>
        <a href={wiki}>Wikipedia Page</a>

        <YouTube
          videoId={videoID}
          // id={string}
          // className={string}
          // containerClassName={string}
          opts={opts}
        />
      </div>
    );
  }
}

export default RecommendationDetails;
