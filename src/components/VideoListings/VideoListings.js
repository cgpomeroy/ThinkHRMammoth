import React from "react";
import IndividualVideoResult from "./IndividualVideoResult";

export function VideoListings(props) {
  return (
    <div
      className="videoListingsContainer"
      style={{
        margin: "1em"
      }}
    >
      {props.videoList.length > 0 ? (
        props.videoList.map((res, i) => (
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
  );
}
