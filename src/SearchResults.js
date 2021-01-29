import React from "react";

const SearchResults = (props) => {
  const { results } = props;
  console.log("SEARCH RESULTS", results)

  return (
    <div>
      I'm the search results
      {results.map( item => {
        return item.id.videoId
      })}

    </div>
  );
};

export default SearchResults;
