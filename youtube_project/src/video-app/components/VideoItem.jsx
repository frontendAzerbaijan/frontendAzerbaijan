import React from "react";
import "./videoitem.css";

const VidoeItem = ({ video, onVideoSelect }) => {
  // childdan parente prop gondermek isteyende biz bunu callback-lar le edirik
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item item"
    >
      <img
        className="ui  image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VidoeItem;
