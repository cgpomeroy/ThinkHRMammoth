import React, { useState, useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ResultsAndPagintation } from "./components/ResultsAndPagination/ResultsAndPagination";
import { VideoListings } from "./components/VideoListings/VideoListings";

function App() {
  const [videoList, setVideoList] = useState([]);
  const [firstSearch, setFirstSearch] = useState(true);
  const [loadingSearchResults, setLoadingResults] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="App">
      <header className="App-header">ThinkHR/Mammoth Code Test</header>
      <SearchBar
        setVideoList={setVideoList}
        setFirstSearch={setFirstSearch}
        setLoadingResults={setLoadingResults}
        setError={setError}
      />
      {loadingSearchResults ? <div>Loading...</div> : null}
      {error ? (
        <div style={{ color: "red" }}>
          There was a problem retreiving your results. Please try again later.
        </div>
      ) : null}
      {!firstSearch && !loadingSearchResults ? (
        <div>
          <ResultsAndPagintation results={videoList.length} />
          <VideoListings videoList={videoList} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default App;
