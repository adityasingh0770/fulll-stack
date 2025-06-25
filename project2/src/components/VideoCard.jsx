
import React from "react";

export default function VideoCard({ video, onLike, onWatchLater, isLiked, isInWatchLater }) {
  return (
    <div className="border p-4 rounded shadow-md">
      <img src={video.thumbnail} alt="thumbnail" className="mb-2" />
      <h3 className="text-lg font-semibold">{video.title}</h3>
      <p className="text-sm text-gray-600">{video.channel}</p>
      <p className="text-sm text-gray-600">{video.views} views • {video.time}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={() => onLike(video.id)} className={isLiked ? "text-red-500" : ""}>
          ❤️ Like
        </button>
        <button onClick={() => onWatchLater(video.id)} className={isInWatchLater ? "text-blue-500" : ""}>
          ➕ Watch Later
        </button>
      </div>
    </div>
  );
}
