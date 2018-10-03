import React, { Component } from "react";

class Recommendations extends Component {
  render() {
    const { searchName, searchType, recommendations } = this.props;
    return (
      <div>
        <h2 style={{ textTransform: "capitalize" }}>
          {searchName} - {searchType}
        </h2>
        {recommendations.map(recommendation => (
          <div key={recommendation.Name}>
            <h5>{recommendation.Name}</h5>
            <h6 style={{ textTransform: "capitalize" }}>
              {recommendation.Type}
            </h6>
          </div>
        ))}
      </div>
    );
  }
}

export default Recommendations;
