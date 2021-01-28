import React, { useState } from "react";

const SearchBar = (props) => {
  let { handleKeyword } = props;
  let keyword = React.createRef();
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          ref={keyword}
          placeholder="Search a video"
          onChange={() => setInputValue(keyword.current.value)}
        />
        <button type="button" onClick={() => handleKeyword(inputValue)}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
