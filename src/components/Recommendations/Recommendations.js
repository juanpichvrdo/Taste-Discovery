import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recommendations extends Component {
  render() {
    const { searchName, searchType, recommendations } = this.props;
    return (
      <div>
        {searchName && (
          <h2 style={{ textTransform: "capitalize" }}>
            {searchName} - {searchType}
          </h2>
        )}

        <React.Fragment>
          {recommendations.map(recommendation => (
            <Link
              to={{
                pathname: `/recommendation/${recommendation.Name}`,
                state: {
                  name: recommendation.Name,
                  type: recommendation.Type,
                  info: recommendation.wTeaser,
                  wiki: recommendation.wUrl,
                  videoID: recommendation.yID,
                  videoUrl: recommendation.yUrl
                }
              }}
              key={recommendation.Name}
            >
              <h5>{recommendation.Name}</h5>
              <h6 style={{ textTransform: "capitalize" }}>
                {recommendation.Type}
              </h6>
            </Link>
          ))}
        </React.Fragment>
      </div>
    );
  }
}

export default Recommendations;

// <RecommendationDetails
//   key={recommendation.Name}
//   recommendationName={recommendation.Name}
//   recommendationType={recommendation.Type}
// />
