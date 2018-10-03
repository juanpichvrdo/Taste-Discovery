import React, { Component } from "react";
import { Link } from "react-router-dom";

class RecommendationDetails extends Component {
  render() {
    const {
      name,
      type,
      info,
      wiki,
      videoID,
      videoUrl
    } = this.props.location.state;
    return (
      <div>
        <Link to="/">Back</Link>
        <h1> {name} </h1>
        <h2> {type} </h2>
        <p> {info} </p>
        <a href={wiki}>Wikipedia Page</a>
      </div>
    );
  }
}

export default RecommendationDetails;
