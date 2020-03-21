import React, { useState } from "react";
import { tsPropertySignature } from "@babel/types";

export function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const query = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchQuery}&key=AIzaSyBbic_3q36LIzd1DK-X6Ghn3-rApxOX1pI`;
  const submitQuery = e => {
    e.preventDefault();
    console.log(searchQuery);
    fetch(query)
      .then(res => res.json())
      .then(res => props.setVideoList(res.items));
  };
  return (
    <div
      className="searchBar"
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "1em",
        justifyContent: "center"
      }}
    >
      <form onSubmit={e => submitQuery(e)}>
        <input
          val={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
