import React from "react";

export function ResultsAndPagintation(props) {
  return (
    <div
      className="resultsAndPagination"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 1em"
      }}
    >
      <div>Total results: {props.results}</div>
      <div>Pages</div>
    </div>
  );
}
