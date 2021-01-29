import React from "react";

const VideoPreview = (props) => {
    console.log(props)
  return (
    <div className="video-preview-container">
      <div>
        <img src={props.info.snippet.thumbnails.medium.url} />
      </div>
      <div>{props.info.snippet.title}</div>
    </div>
  );
};

export default VideoPreview;
