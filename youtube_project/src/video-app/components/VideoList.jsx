import React from "react";
import VidoeItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VidoeItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
  });

  return(
    <div className="ui relaxed divided list">{renderedList}
      <a href="#">Load More ></a>
    </div>
  ) 
};

export default VideoList;
