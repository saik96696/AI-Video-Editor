"use client";

import { useEffect, useRef } from "react";
import { PlayCircle } from "lucide-react";

import { useProjectStore } from "@/lib/project/project-store";
import { usePlaybackStore } from "@/lib/playback/playback-store";

export default function PreviewPanel() {
  const { project } = useProjectStore();

  const {
    setPlaying,
    setCurrentTime,
    setDuration,
    setVolume,
  } = usePlaybackStore();

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setVolume(video.volume);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => {
      setPlaying(true);
    };

    const handlePause = () => {
      setPlaying(false);
    };

    const handleVolumeChange = () => {
      setVolume(video.volume);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("volumechange", handleVolumeChange);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("volumechange", handleVolumeChange);
    };
  }, [setCurrentTime, setDuration, setPlaying, setVolume]);

  if (!project.video) {
    return (
      <section className="flex h-full items-center justify-center bg-muted/30 p-4">
        <div className="flex h-full w-full items-center justify-center rounded-xl border bg-black text-white">
          <div className="text-center">
            <PlayCircle className="mx-auto mb-4 h-16 w-16 opacity-70" />
            <p className="text-lg font-medium">
              No Video Loaded
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex h-full items-center justify-center overflow-hidden bg-muted/30 p-4">

      <div className="flex h-full w-full items-center justify-center rounded-xl border bg-background shadow-lg">

        <video
          ref={videoRef}
          src={project.video.videoUrl}
          controls
          preload="metadata"
          className="max-h-full max-w-full object-contain bg-black"
        />

      </div>

    </section>
  );
}