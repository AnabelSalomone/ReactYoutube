import React, { useState } from "react";
import "materialize-css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchbar from "./SearchBar";
import Video from "./Video";
import SearchResults from "./SearchResults";

function App() {
  const [searchResult, setSearchResult] = useState([]); // established via the APIData function and sent to the SerachResults component
  const [keyword, setKeyword] = useState("");

  const APIData = async (keyword) => {
    setKeyword(keyword);

    const url = "http://localhost:5000/Search/";
    const api = url + keyword;

    const data = await fetch(api);
    const json = await data.clone().json();

    setSearchResult(json);
  };

  const handleSearchbar = (keyword) => {
    APIData(keyword);
  };

  return (
    <div className="App">
      <Router>
        <Searchbar handleKeyword={handleSearchbar} />
        <Switch>
          <Route path="/Video/:id" children={<Video />} />
          <Route
            path="/SearchResults"
            children={
              <SearchResults results={searchResult} keyword={keyword} />
            }
          / >
        </Switch>
      </Router>
    </div>
  );
}

export default App;
