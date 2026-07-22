"use client";

export default function MediaPanel() {
  return (
    <aside className="w-72 border-r bg-card p-4">
      <h2 className="mb-4 text-lg font-semibold">
        Media Library
      </h2>

      <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
        Uploaded videos will appear here.
      </div>
    </aside>
  );
}