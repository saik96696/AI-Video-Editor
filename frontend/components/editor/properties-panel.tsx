"use client";

export default function PropertiesPanel() {
  return (
    <aside className="w-80 border-l bg-card p-4">
      <h2 className="mb-4 text-lg font-semibold">
        Properties
      </h2>

      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          Caption Style
        </div>

        <div className="rounded-lg border p-4">
          Font
        </div>

        <div className="rounded-lg border p-4">
          Animation
        </div>
      </div>
    </aside>
  );
}