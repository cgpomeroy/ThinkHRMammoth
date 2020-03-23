import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

/**
 * SearchBar.js provides the UI for user searches as well as the functionality
 * for updating state related to the call to the YouTube API.
 *
 * When the user clicks either the search icon or button, the
 * search query is built (27) and the call is made to the YouTube API (29-44).
 *
 * As part of submitting the query, the parent's state is updated.
 *  - Loading is set to true (31).
 *  - Any previous errors are cleared (32).
 *
 * If the call is successful, the parent's state is updated.
 *  - Loading is set to false(38).
 *  - The "FirstSearch" indicator is set to false(37).
 *  - The VideoList is populated with the search results(36).
 *
 * If the call is unsuccessful, the parent's state is udpated.
 *  - Loading is set to false(41).
 *  - The "Error" indicator is set to true, displaying a generic failure message(42).
 */

export function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const query = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchQuery}&key=AIzaSyBbic_3q36LIzd1DK-X6Ghn3-rApxOX1pI`;

  const submitQuery = e => {
    e.preventDefault();
    props.setLoadingResults(true);
    props.setError(false);
    fetch(query)
      .then(res => res.json())
      .then(res => {
        props.setVideoList(res.items);
        props.setFirstSearch(false);
        props.setLoadingResults(false);
      })
      .catch(() => {
        props.setLoadingResults(false);
        props.setError(true);
      });
  };
  return (
    <div
      className="searchBar center-flex"
      style={{
        flexDirection: "row",
        padding: "1em"
      }}
    >
      <form onSubmit={e => submitQuery(e)} style={{ width: "100%" }}>
        <div className="center-flex">
          <div
            className="center-flex"
            style={{
              border: "1px black solid",
              height: "37px",
              borderRadius: "3px"
            }}
          >
            <FiSearch
              style={{ padding: "0 1em" }}
              onClick={e => submitQuery(e)}
            />
            <input
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Enter your search here..."
              style={{
                border: "none",
                outline: "none",
                height: "80%",
                width: "240px"
              }}
              val={searchQuery}
            />
          </div>
          <button
            style={{
              height: "40px",
              width: "120px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: 3,
              marginLeft: -5
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
