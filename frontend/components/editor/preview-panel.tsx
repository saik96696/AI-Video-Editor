"use client";

import { PlayCircle } from "lucide-react";

import { useProjectStore } from "@/lib/project/project-store";

export default function PreviewPanel() {
  const { project } = useProjectStore();

  if (!project.video) {
    return (
      <section className="flex flex-1 items-center justify-center bg-muted/30 p-8">
        <div className="flex aspect-video w-full max-w-5xl items-center justify-center rounded-xl border bg-black text-white">
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
    <section className="flex flex-1 items-center justify-center bg-muted/30 p-8">
      <div className="w-full max-w-5xl overflow-hidden rounded-xl border bg-background shadow-lg">

        <video
          src={project.video.videoUrl}
          controls
          preload="metadata"
          className="aspect-video w-full bg-black"
        />

        <div className="border-t p-4">
          <h3 className="truncate text-lg font-semibold">
            {project.video.name}
          </h3>

          <div className="mt-2 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span>
              Resolution: {project.video.width} × {project.video.height}
            </span>

            <span>
              Duration: {project.video.duration.toFixed(1)} sec
            </span>

            <span>
              Size: {(project.video.size / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}