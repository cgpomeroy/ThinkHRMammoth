import React, { useState, useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ResultsAndPagintation } from "./components/ResultsAndPagination/ResultsAndPagination";
import { IndividualVideoResult } from "./components/VideoListings/IndividualVideoResult";

function App() {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => console.log(videoList));
  return (
    <div className="App">
      <header className="App-header">ThinkHR/Mammoth Code Test</header>
      <SearchBar setVideoList={setVideoList} />
      <ResultsAndPagintation results={videoList.length} />
      <div className="videoListingsContainer" style={{ padding: "1em 0" }}>
        {videoList.length > 0
          ? videoList.map(res => (
              <IndividualVideoResult
                key={res.snippet.etag}
                title={res.snippet.title || false}
                description={res.snippet.description || false}
                image={res.snippet.thumbnails.high.url || false}
                link="https://www.timbers.com"
                date={res.snippet.publishedAt || false}
                videoList={videoList}
              />
            ))
          : "No results."}
      </div>
    </div>
  );
}

export default App;
