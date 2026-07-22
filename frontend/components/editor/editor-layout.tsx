"use client";

import TopToolbar from "./top-toolbar";
import MediaPanel from "./media-panel";
import PreviewPanel from "./preview-panel";
import PlaybackHud from "./playback-hud";
import TimelinePanel from "./timeline-panel";
import StatusBar from "./status-bar";

export default function EditorLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">

      {/* Toolbar */}
      <div className="shrink-0">
        <TopToolbar />
      </div>

      {/* Main Workspace */}
      <div className="flex min-h-0 flex-1 overflow-hidden">

        {/* Left Sidebar */}
        <div className="shrink-0">
          <MediaPanel />
        </div>

        {/* Preview */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <PreviewPanel />
        </div>

        {/* Right Sidebar */}
        <aside className="w-80 shrink-0 overflow-y-auto border-l bg-card p-4">
          <PlaybackHud />
        </aside>

      </div>

      {/* Timeline */}
      <div className="h-56 shrink-0">
        <TimelinePanel />
      </div>

      {/* Status */}
      <div className="shrink-0">
        <StatusBar />
      </div>

    </div>
  );
}