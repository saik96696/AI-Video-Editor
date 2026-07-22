"use client";

import { Film } from "lucide-react";

import { useProjectStore } from "@/lib/project/project-store";

function formatFileSize(bytes: number): string {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function MediaPanel() {
  const { project } = useProjectStore();

  return (
    <aside className="w-72 border-r bg-card p-4">
      <h2 className="mb-4 text-lg font-semibold">
        Media Library
      </h2>

      {!project.video ? (
        <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
          Uploaded videos will appear here.
        </div>
      ) : (
        <div className="space-y-4 rounded-xl border bg-background p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <Film className="h-8 w-8 text-primary" />

            <div className="min-w-0">
              <p className="truncate font-semibold">
                {project.video.name}
              </p>

              <p className="text-xs text-muted-foreground">
                Video Asset
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Resolution
              </span>

              <span>
                {project.video.width} × {project.video.height}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Duration
              </span>

              <span>
                {formatDuration(project.video.duration)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-muted-foreground">
                Size
              </span>

              <span>
                {formatFileSize(project.video.size)}
              </span>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}