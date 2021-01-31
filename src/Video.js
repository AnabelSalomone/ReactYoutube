import React from "react";
import { useParams, useLocation, withRouter } from "react-router-dom";

const Video = () => {
  const { id } = useParams();
  const data = useLocation();
  const { snippet } = data.state.info;

  return (
    <div>
      <h3>{snippet.title}</h3>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${id}`}
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default withRouter(Video);
