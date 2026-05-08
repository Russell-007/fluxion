import { Canvas } from "../editor/Canvas"
import { PropertiesPanel } from "../editor/PropertiesPanel"
import { Sidebar } from "../editor/Sidebar"

export default function HomePage() {
  return (
    <main className="flex h-screen">
      <aside className="w-64 border-r">
        <Sidebar/>
      </aside>

      <div className="flex-1 overflow-auto bg-gray-100">
        <Canvas />
      </div>

      <aside className="w-80 border-l bg-white">
        <PropertiesPanel />
      </aside>
    </main>
  )
}