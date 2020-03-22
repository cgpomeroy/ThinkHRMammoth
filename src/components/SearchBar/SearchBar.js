import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export function SearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const query = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchQuery}&key=AIzaSyBbic_3q36LIzd1DK-X6Ghn3-rApxOX1pI`;
  const submitQuery = e => {
    e.preventDefault();
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
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      <form onSubmit={e => submitQuery(e)} style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              border: "1px black solid",
              height: "37px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "3px"
            }}
          >
            <FiSearch
              style={{ padding: "0 1em" }}
              onClick={e => submitQuery(e)}
            />
            <input
              val={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                height: "80%",
                width: "240px"
              }}
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
