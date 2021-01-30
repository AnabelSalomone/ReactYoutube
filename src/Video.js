import React from "react";
import { useParams } from "react-router-dom";

const Video = () => {
  let { id } = useParams();

  return (
    <div>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${id}`}
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Video;
