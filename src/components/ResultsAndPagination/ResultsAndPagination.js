import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
      <div>
        <FaChevronLeft />
        {props.results > 0 ? `1/${props.results / 5}` : "0/0"}
        <FaChevronRight />
      </div>
    </div>
  );
}
