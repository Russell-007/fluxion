"use client"

import { nanoid } from "nanoid"
import { useEditorStore } from "../store/editor-store"

export function Sidebar() {
  const addNode = useEditorStore(
    (s) => s.addNode
  )

  return (
    <div className="space-y-2 p-4">
      <button
        className="w-full rounded bg-black p-2 text-white"
        onClick={() =>
          addNode({
            id: nanoid(),

            type: "hero",

            props: {
              title: "New Hero",
              subtitle: "Subtitle",
            },
          })
        }
      >
        Add Hero
      </button>
    </div>
  )
}