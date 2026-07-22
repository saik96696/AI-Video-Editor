export default function AppSidebar() {
  return (
    <aside className="w-64 border-r bg-white p-6">
      <h2 className="text-xl font-bold">🎬 AI Video Editor</h2>

      <nav className="mt-8 space-y-3">
        <div className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100">
          Dashboard
        </div>

        <div className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100">
          Upload
        </div>

        <div className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100">
          Captions
        </div>

        <div className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100">
          Timeline
        </div>

        <div className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100">
          Export
        </div>

        <div className="cursor-pointer rounded-lg px-3 py-2 hover:bg-gray-100">
          Settings
        </div>
      </nav>
    </aside>
  );
}