"use client";

export default function TimelinePanel() {
  return (
    <footer className="h-56 border-t bg-card p-4">
      <h2 className="mb-4 font-semibold">
        Timeline
      </h2>

      <div className="space-y-4">
        <div className="h-10 rounded bg-muted flex items-center px-4">
          🎬 Video Track
        </div>

        <div className="h-10 rounded bg-muted flex items-center px-4">
          💬 Caption Track
        </div>

        <div className="h-10 rounded bg-muted flex items-center px-4">
          🔊 Audio Track
        </div>
      </div>
    </footer>
  );
}