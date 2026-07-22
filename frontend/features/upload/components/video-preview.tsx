"use client";

import Image from "next/image";
import { Film, Clock3, HardDrive, Play, Trash2, Sparkles } from "lucide-react";
import type { VideoMetadata } from "../types/video";

type VideoPreviewProps = {
  metadata: VideoMetadata;
};

function formatDuration(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function VideoPreview({
  metadata,
}: VideoPreviewProps) {
  return (
    <div className="mt-8 rounded-2xl border bg-card p-6 shadow-md">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Thumbnail */}
        <div className="overflow-hidden rounded-xl border bg-muted">
          <Image
            src={metadata.thumbnail}
            alt={metadata.name}
            width={320}
            height={180}
            className="aspect-video h-auto w-full object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3
              className="truncate text-xl font-bold"
              title={metadata.name}
            >
              {metadata.name}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Video is ready for caption generation.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border bg-background p-4">
                <Film className="mb-3 h-5 w-5 text-primary" />

                <p className="text-xs text-muted-foreground">
                  Resolution
                </p>

                <p className="mt-1 font-semibold">
                  {metadata.width} × {metadata.height}
                </p>
              </div>

              <div className="rounded-xl border bg-background p-4">
                <Clock3 className="mb-3 h-5 w-5 text-primary" />

                <p className="text-xs text-muted-foreground">
                  Duration
                </p>

                <p className="mt-1 font-semibold">
                  {formatDuration(metadata.duration)}
                </p>
              </div>

              <div className="rounded-xl border bg-background p-4">
                <HardDrive className="mb-3 h-5 w-5 text-primary" />

                <p className="text-xs text-muted-foreground">
                  File Size
                </p>

                <p className="mt-1 font-semibold">
                  {(metadata.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-accent">
              <Play size={16} />
              Preview
            </button>

            <button className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50">
              <Trash2 size={16} />
              Remove
            </button>

            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              <Sparkles size={16} />
              Generate Captions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}