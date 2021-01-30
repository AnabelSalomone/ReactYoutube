import React from "react";
import VideoPreview from "./VideoPreview";

const SearchResults = (props) => {
  const { results, keyword } = props;

  const style = {
    fontStyle: "italic"
  }

  return (
    <div className="search-results-container">
      {keyword.length > 0 ? <p style={style}>Search results for "{keyword}"</p> : null}
      {results.map((result) => {
        if (result.id.kind === "youtube#video") {
          return <VideoPreview info={result} />;
        }
      })}
    </div>
  );
};

export default SearchResults;
