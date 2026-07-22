"use client";

import TopToolbar from "./top-toolbar";
import MediaPanel from "./media-panel";
import PreviewPanel from "./preview-panel";
import PropertiesPanel from "./properties-panel";
import TimelinePanel from "./timeline-panel";
import StatusBar from "./status-bar";

export default function EditorLayout() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <TopToolbar />

      <main className="flex flex-1 overflow-hidden">
        <MediaPanel />

        <PreviewPanel />

        <PropertiesPanel />
      </main>

      <TimelinePanel />

      <StatusBar />
    </div>
  );
}