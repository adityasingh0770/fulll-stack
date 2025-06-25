
import React, { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import videos from "../data/dummyVideos";

export default function Home() {
  const [likes, setLikes] = useState(() => JSON.parse(sessionStorage.getItem("likes")) || []);
  const [watchLater, setWatchLater] = useState(() => JSON.parse(sessionStorage.getItem("watchLater")) || []);

  useEffect(() => {
    sessionStorage.setItem("likes", JSON.stringify(likes));
    sessionStorage.setItem("watchLater", JSON.stringify(watchLater));
  }, [likes, watchLater]);

  const toggleLike = (id) => {
    setLikes((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const toggleWatchLater = (id) => {
    setWatchLater((prev) => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {videos.map(video => (
        <VideoCard
          key={video.id}
          video={video}
          onLike={toggleLike}
          onWatchLater={toggleWatchLater}
          isLiked={likes.includes(video.id)}
          isInWatchLater={watchLater.includes(video.id)}
        />
      ))}
    </div>
  );
}
