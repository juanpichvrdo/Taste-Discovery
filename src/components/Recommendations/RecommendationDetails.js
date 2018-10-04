import React, { Component } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import Loader from "react-loader";

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
        <Link to="/">Back</Link>
        <h1> {name} </h1>
        <h2> {type} </h2>

        {videoID && (
          <React.Fragment>
            <Loader loaded={this.state.loaded} />
            <YouTube
              videoId={videoID}
              onReady={() =>
                this.setState({
                  loaded: true
                })
              } // className={string}
              // containerClassName={string}
              opts={opts}
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
