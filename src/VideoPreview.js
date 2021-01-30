import React from "react";
import unescapeHTMLEntities from "./utils/unescapeHTMLEntities.utils";


const VideoPreview = (props) => {

  const title = unescapeHTMLEntities(props.info.snippet.title, "h4");

  return (
    <div className="video-preview-container">
      <div>
        <img src={props.info.snippet.thumbnails.medium.url} />
      </div>
      <div className="video-preview-info">
        {title}
        <p>{props.info.snippet.channelTitle}</p>
        <p className="video-preview-description">
          {props.info.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default VideoPreview;
