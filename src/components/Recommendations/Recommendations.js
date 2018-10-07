import React from "react";
import { Link } from "react-router-dom";

import "./recommendations.css";

const Recommendations = ({
  searchName,
  searchType,
  recommendations,
  error
}) => {
  return (
    <div className="recommendation">
      {searchName &&
        !error && (
          <div className="recommendation-heading">
            <h2>{searchName}</h2>
            <h4>{searchType}</h4>
          </div>
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
};

export default Recommendations;
