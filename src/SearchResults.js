import React from "react";
import VideoPreview from './VideoPreview'

const SearchResults = (props) => {
  const { results, keyword } = props;

  return (
     
    <div className="search-results-container">
     {keyword.length > 0 ? <h4>Search results for "{keyword}"</h4> : null}
      {results.map( result => {
        return <VideoPreview info={result}/>;
      })}

    </div>
  );
};

export default SearchResults;
