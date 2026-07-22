"use client";

import Image from "next/image";
import {
  Clock,
  HardDrive,
  Monitor,
  Sparkles,
  Trash2,
} from "lucide-react";

import type { VideoMetadata } from "../types/video";

interface VideoPreviewProps {
  metadata: VideoMetadata;
  onRemove: () => void;
  onGenerateCaptions: () => void;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function formatFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);

  return `${mb.toFixed(2)} MB`;
}

export default function VideoPreview({
  metadata,
  onRemove,
  onGenerateCaptions,
}: VideoPreviewProps) {
  return (
    <div className="space-y-6">
      {/* Thumbnail */}
      <div className="overflow-hidden rounded-xl border">
        <Image
          src={metadata.thumbnail}
          alt={metadata.name}
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      {/* File Info */}
      <div>
        <h2 className="truncate text-xl font-semibold">
          {metadata.name}
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Your video is ready for editing.
        </p>
      </div>

      {/* Metadata */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-4">
          <div className="mb-2 flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            <span className="font-medium">Resolution</span>
          </div>

          <p className="text-sm text-muted-foreground">
            {metadata.width} × {metadata.height}
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <div className="mb-2 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Duration</span>
          </div>

          <p className="text-sm text-muted-foreground">
            {formatDuration(metadata.duration)}
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <div className="mb-2 flex items-center gap-2">
            <HardDrive className="h-5 w-5" />
            <span className="font-medium">File Size</span>
          </div>

          <p className="text-sm text-muted-foreground">
            {formatFileSize(metadata.size)}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onGenerateCaptions}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          <Sparkles className="h-4 w-4" />
          Generate Captions
        </button>

        <button
          onClick={onRemove}
          className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
        >
          <Trash2 className="h-4 w-4" />
          Remove Video
        </button>
      </div>
    </div>
  );
}