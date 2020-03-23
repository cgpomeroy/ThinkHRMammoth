import React, { useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ResultsAndPagintation } from "./components/ResultsAndPagination/ResultsAndPagination";
import { VideoListings } from "./components/VideoListings/VideoListings";

/**
 * App.js serves as the parent component for this application.
 *
 * Shared state is declared here (13-16)
 * This state is used to render a
 * - Loading indicator (35)
 * - Error message regarding a failed response from the YouTube API (36-40)
 * - List of video results (41-48)
 *
 * firstSearch prevents the render of ResultsAndPagination and VideoListings
 *    until the receiving the first successful batch of results (22)
 * */

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
