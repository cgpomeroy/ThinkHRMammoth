import React from "react";

/**
 * IndividualVideoResult.js is used to render individual video results.
 *
 * The component contains two functions for
 * - Formatting dates (12-33)
 * - Changing links based on whether the result is a video or a channel (34-40)
 */

export default function IndividualVideoResult(props) {
  function formatDate(d) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${month} ${year}`.toUpperCase();
  }
  function buildLink(kind) {
    const isVideo = kind.indexOf("#video") > -1;
    if (isVideo) {
      return `https://www.youtube.com/watch?v=${props.linkId}`;
    } else {
      return `https://www.youtube.com/channel/${props.linkId}`;
    }
  }
  return (
    <div
      className="videoListing"
      style={{
        display: "flex",
        flexWrap: "wrap",
        border: "1px black solid",
        margin: ".75em 0",
        padding: "1em"
      }}
    >
      <div
        className="flex-center"
        style={{
          flex: 2,
          fontWeight: "bold"
        }}
      >
        {props.image ? (
          <div>
            <img
              alt={`${props.title} thumbnail`}
              src={props.image}
              style={{ maxHeight: "20vh", height: "100%", minHeight: "200px" }}
            />
          </div>
        ) : (
          "No preview available"
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flex: 3,
          padding: "0 1em",
          textAlign: "left"
        }}
      >
        <div
          style={{
            flex: 2
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "1.5em"
            }}
          >
            {props.title || "No Title"}
          </h3>
        </div>
        <div
          style={{
            flex: 3,
            overflow: "hidden",
            minHeight: "30%",
            paddingTop: "1em"
          }}
        >
          {props.description || "No Description"}
        </div>
        <div
          style={{
            flex: 3,
            justifyContent: "middle",
            display: "flex",
            alignItems: "center",
            paddingTop: "1em"
          }}
        >
          <div>
            <a href={buildLink(props.kind) || ""}>
              <button
                style={{
                  height: "40px",
                  width: "120px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                  borderRadius: 3
                }}
              >
                View
              </button>
            </a>
          </div>
        </div>
        <div style={{ flex: 1, paddingTop: "1em" }}>
          {`${formatDate(new Date(props.date))} by ${props.channelTitle}` ||
            "No Date"}
        </div>
      </div>
    </div>
  );
}
