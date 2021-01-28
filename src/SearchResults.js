import React from "react";

const SearchResults = (props) => {
  const { results } = props;

  return (
    <div>
      I'm the search results
      {JSON.stringify(results)}
    </div>
  );
};

export default SearchResults;
