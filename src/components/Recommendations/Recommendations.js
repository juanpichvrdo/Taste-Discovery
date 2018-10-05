import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./recommendations.css";

class Recommendations extends Component {
  render() {
    const { searchName, searchType, recommendations } = this.props;
    return (
      <div className="recommendation">
        {searchName && (
          <h2 className="recommendation-heading">
            {searchName} -{" "}
            <span className="recommendation-type">{searchType}</span>
          </h2>
        )}

        <div className="recommendation-list">
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
              className="recommendation-links"
            >
              <h4>{recommendation.Name}</h4>
              <h6 className="recommendation-type">{recommendation.Type}</h6>
            </Link>
          ))}
        </div>
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
