"use client";

import { Save, Undo2, Redo2, Download } from "lucide-react";

export default function TopToolbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-card px-6">
      <h1 className="text-xl font-bold">
        AI Video Editor
      </h1>

      <div className="flex items-center gap-3">
        <button className="rounded-lg border p-2 hover:bg-accent">
          <Undo2 size={18} />
        </button>

        <button className="rounded-lg border p-2 hover:bg-accent">
          <Redo2 size={18} />
        </button>

        <button className="rounded-lg border px-4 py-2 hover:bg-accent flex items-center gap-2">
          <Save size={18} />
          Save
        </button>

        <button className="rounded-lg bg-primary px-4 py-2 text-primary-foreground hover:opacity-90 flex items-center gap-2">
          <Download size={18} />
          Export
        </button>
      </div>
    </header>
  );
}