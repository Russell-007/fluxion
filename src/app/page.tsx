import { Canvas } from "../editor/Canvas"

export default function HomePage() {
  return (
    <main className="flex h-screen">
      <aside className="w-64 border-r">
        Sidebar
      </aside>

      <div className="flex-1 overflow-auto">
        <Canvas />
      </div>

      <aside className="w-80 border-l">
        Properties
      </aside>
    </main>
  )
}