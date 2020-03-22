import React, { useState, useEffect } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ResultsAndPagintation } from "./components/ResultsAndPagination/ResultsAndPagination";
import { IndividualVideoResult } from "./components/VideoListings/IndividualVideoResult";

function App() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">ThinkHR/Mammoth Code Test</header>
      <SearchBar setVideoList={setVideoList} />
      <ResultsAndPagintation results={videoList.length} />
      <div
        className="videoListingsContainer"
        style={{
          margin: "1em"
        }}
      >
        {videoList.length > 0 ? (
          videoList.map((res, i) => (
            <IndividualVideoResult
              key={i}
              kind={res.id.kind}
              title={res.snippet.title || false}
              description={res.snippet.description || false}
              image={res.snippet.thumbnails.high.url || false}
              linkId={res.id.channelId || res.id.videoId}
              date={res.snippet.publishedAt || false}
              channelTitle={res.snippet.channelTitle || false}
            />
          ))
        ) : (
          <div style={{ padding: "1em" }}>No results.</div>
        )}
      </div>
    </div>
  );
}
export default App;
