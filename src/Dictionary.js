import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="form-inline" onSubmit={search}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search a word"
          aria-label="Search"
          onChange={handleKeywordChange}
        />
        &nbsp;
        <button className="btn btn-outline-light my-2 my-sm-0 " type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <div className="Recommendations">
        <h6>Recommendations:</h6>
        Lotus &nbsp; Recherche &nbsp; Luxury
      </div>
      <Results results={results} />
    </div>
  );
}
