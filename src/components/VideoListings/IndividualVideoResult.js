import React from "react";

export function IndividualVideoResult(props) {
  return (
    <div
      className="videoListing"
      style={{
        display: "flex",
        flexWrap: "wrap",
        border: "1px black solid",
        padding: "1em",
        margin: "0 1em"
      }}
    >
      <div
        style={{
          height: "100%",
          flex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold"
        }}
      >
        {props.image ? (
          <img
            src={props.image}
            style={{ maxHeight: "20vh", height: "100%" }}
          />
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
        <div style={{ flex: 2, maxLines: 1, minHeight: "20%" }}>
          <h3
            style={{
              margin: 0,
              fontSize: "1.5em",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden"
            }}
          >
            {props.title || "No Title"}
          </h3>
        </div>
        <div
          style={{
            flex: 3,
            overflow: "hidden",
            minHeight: "30%"
          }}
        >
          {props.description || "No Description"}
        </div>
        <div
          style={{
            flex: 3,
            justifyContent: "middle",
            display: "flex",
            alignItems: "center"
          }}
        >
          <div>
            <a href={props.link || ""}>
              <button style={{ height: "40px", width: "60px" }}>View</button>
            </a>
          </div>
        </div>
        <div style={{ flex: 1 }}>{props.date || "No Date"}</div>
      </div>
    </div>
  );
}
