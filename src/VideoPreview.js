import React from "react";
import unescapeHTMLEntities from "./utils/unescapeHTMLEntities.utils";
import { Link, withRouter } from "react-router-dom";

const VideoPreview = (props) => {
  const title = unescapeHTMLEntities(props.info.snippet.title, "h4");
  const { snippet } = props.info;

  return (
    <div className="video-preview-container">
      <div>
        <img src={props.info.snippet.thumbnails.medium.url} />
      </div>
      <div className="video-preview-info">
        <Link
          to={{
            pathname: `/Video/${props.info.id.videoId}`,
            state: {
              info: { snippet },
            },
          }}
        >
          {title}
        </Link>
        <p>{props.info.snippet.channelTitle}</p>
        <p className="video-preview-description">
          {props.info.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default withRouter(VideoPreview);
