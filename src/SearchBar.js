import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const SearchBar = (props) => {
  let { handleKeyword } = props;
  let keyword = React.createRef();
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = () => {
    setInputValue(keyword.current.value)
  }

  const handleOnClick = () => {
    props.history.push("/SearchResults");
    handleKeyword(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnClick();
}
  

  return (
    <div className="search-bar-container">
      <h2>My Youtube app</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={keyword}
          placeholder="Search a video"
          onChange={handleOnChange}
        />
        <button type="button" onClick={handleOnClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default withRouter(SearchBar);
