"use client";

import { useCallback, useState } from "react";
import type { VideoMetadata } from "../types/video";

export function useVideoMetadata() {
  const [metadata, setMetadata] = useState<VideoMetadata | null>(null);
  const [loading, setLoading] = useState(false);

  const loadVideo = useCallback(async (file: File) => {
    setLoading(true);

    try {
      const url = URL.createObjectURL(file);

      const video = document.createElement("video");
      video.preload = "metadata";
      video.src = url;
      video.muted = true;

      await new Promise<void>((resolve, reject) => {
        video.onloadedmetadata = () => resolve();
        video.onerror = () =>
          reject(new Error("Unable to load video."));
      });

      video.currentTime = 0;

      await new Promise<void>((resolve) => {
        video.onseeked = () => resolve();
      });

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.drawImage(video, 0, 0);
      }

      const thumbnail = canvas.toDataURL("image/jpeg");

      setMetadata({
        file,
        name: file.name,
        size: file.size,
        duration: video.duration,
        width: video.videoWidth,
        height: video.videoHeight,
        thumbnail,
      });

      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setMetadata(null);
    setLoading(false);
  }, []);

  return {
    metadata,
    loading,
    loadVideo,
    reset,
  };
}