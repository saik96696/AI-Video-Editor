"use client";

import { usePlaybackStore } from "@/lib/playback/playback-store";

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function PlaybackHud() {
  const {
    isPlaying,
    currentTime,
    duration,
    volume,
    playbackRate,
  } = usePlaybackStore();

  return (
    <div className="rounded-lg border bg-card p-4 text-sm shadow-sm">
      <h3 className="mb-3 text-base font-semibold">
        Playback Debug
      </h3>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Status</span>
          <span>{isPlaying ? "▶ Playing" : "⏸ Paused"}</span>
        </div>

        <div className="flex justify-between">
          <span>Current Time</span>
          <span>{formatTime(currentTime)}</span>
        </div>

        <div className="flex justify-between">
          <span>Duration</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="flex justify-between">
          <span>Volume</span>
          <span>{Math.round(volume * 100)}%</span>
        </div>

        <div className="flex justify-between">
          <span>Speed</span>
          <span>{playbackRate.toFixed(1)}x</span>
        </div>
      </div>
    </div>
  );
}