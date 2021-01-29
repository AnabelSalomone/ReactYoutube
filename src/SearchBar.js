import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {TextInput} from "react-materialize"

const SearchBar = (props) => {
  let { handleKeyword } = props;
  let keyword = React.createRef();
  const [inputValue, setInputValue] = useState("");

  const handleOnClick = () => {
    props.history.push("/SearchResults");
    handleKeyword(inputValue);
  };

  return (
    <div className="search-bar-container">
      <h2>My Youtube app</h2>
      <form>
        <input
          type="text"
          ref={keyword}
          placeholder="Search a video"
          onChange={() => setInputValue(keyword.current.value)}
        />
        <button type="button" onClick={handleOnClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default withRouter(SearchBar);
