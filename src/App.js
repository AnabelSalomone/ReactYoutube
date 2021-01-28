import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchbar from "./SearchBar";
import Video from "./Video";
import SearchResults from "./SearchResults";

function App() {
  const [searchKeyword, setSearchKeyword] = useState(""); // established from the Searchbar component
  const [searchResult, setSearchResult] = useState({}); // established via the APIData function and sent to the SerachResults component

  const APIData = async (keyword) => {
    const url = "http://localhost:5000/Search/";
    const api = url + keyword;

    const data = await fetch(api);
    const json = await Promise.resolve(data.clone().json());

    console.log(json);
    setSearchResult(Object.assign({}, json));
  };

  useEffect(() => {
    APIData(searchKeyword);
  }, [searchKeyword]);

  return (
    <div className="App">
      <Searchbar handleKeyword={setSearchKeyword} />
      <Router>
        <Switch>
          <Route path="/Video">
            <Video />
          </Route>
          <Route path="/SearchResults">
            <SearchResults results={SearchResult} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
