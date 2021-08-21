import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001463cbb39d1b14492ab91b777587fee55";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form className="form-inline" onSubmit={handleSubmit}>
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
          lotus &nbsp; coffee &nbsp; luxury
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
