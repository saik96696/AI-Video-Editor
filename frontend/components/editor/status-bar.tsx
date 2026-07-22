"use client";

export default function StatusBar() {
  return (
    <div className="flex h-8 items-center justify-between border-t bg-muted px-4 text-xs text-muted-foreground">
      <span>Ready</span>

      <span>Zoom: 100%</span>
    </div>
  );
}