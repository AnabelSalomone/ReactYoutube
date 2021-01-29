import React from "react";
import VideoPreview from './VideoPreview'

const SearchResults = (props) => {
  const { results } = props;

  return (
    <div>
      I'm the search results
      {results.map( result => {
        return <VideoPreview info={result}/>;
      })}

    </div>
  );
};

export default SearchResults;
