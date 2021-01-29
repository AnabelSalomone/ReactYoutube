import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchbar from "./SearchBar";
import Video from "./Video";
import SearchResults from "./SearchResults";

function App() {
  const [searchResult, setSearchResult] = useState([]); // established via the APIData function and sent to the SerachResults component

  const APIData = async (keyword) => {
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
          <Route path="/Video">
            <Video />
          </Route>
          <Route path="/SearchResults">
            <SearchResults results={searchResult} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
