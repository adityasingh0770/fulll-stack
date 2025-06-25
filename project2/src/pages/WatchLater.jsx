
import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import videos from "../data/dummyVideos";

export default function WatchLater() {
  const [watchLater, setWatchLater] = useState(() => JSON.parse(sessionStorage.getItem("watchLater")) || []);
  const [likes, setLikes] = useState(() => JSON.parse(sessionStorage.getItem("likes")) || []);

  useEffect(() => {
    sessionStorage.setItem("watchLater", JSON.stringify(watchLater));
    sessionStorage.setItem("likes", JSON.stringify(likes));
  }, [watchLater, likes]);

  const toggleLike = (id) => {
    setLikes((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const removeFromWatchLater = (id) => {
    setWatchLater((prev) => prev.filter(i => i !== id));
  };

  const filteredVideos = videos.filter(v => watchLater.includes(v.id));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredVideos.map(video => (
        <VideoCard
          key={video.id}
          video={video}
          onLike={toggleLike}
          onWatchLater={removeFromWatchLater}
          isLiked={likes.includes(video.id)}
          isInWatchLater={true}
        />
      ))}
    </div>
  );
}
