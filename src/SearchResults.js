import React from "react";
import VideoPreview from './VideoPreview'

const SearchResults = (props) => {
  const { results } = props;

  return (
    <div className="search-results-container">
      {results.map( result => {
        return <VideoPreview info={result}/>;
      })}

    </div>
  );
};

export default SearchResults;
