"use client";

import Image from "next/image";
import type { VideoMetadata } from "../types/video";

type VideoPreviewProps = {
  metadata: VideoMetadata;
};

export default function VideoPreview({
  metadata,
}: VideoPreviewProps) {
  const minutes = Math.floor(metadata.duration / 60);
  const seconds = Math.floor(metadata.duration % 60);

  return (
    <div className="mt-6 rounded-xl border p-5">
      <div className="flex flex-col gap-6 md:flex-row">
        <Image
          src={metadata.thumbnail}
          alt={metadata.name}
          width={260}
          height={150}
          className="rounded-lg border object-cover"
        />

        <div className="flex-1 space-y-3">
          <h3 className="text-lg font-semibold">
            {metadata.name}
          </h3>

          <p className="text-muted-foreground">
            💾 {(metadata.size / 1024 / 1024).toFixed(2)} MB
          </p>

          <p className="text-muted-foreground">
            📺 {metadata.width} × {metadata.height}
          </p>

          <p className="text-muted-foreground">
            ⏱ {minutes}:{seconds.toString().padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
}