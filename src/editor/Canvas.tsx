"use client";

import { sampleSchema } from "../lib/sample-schema"
import { RenderNode } from "../renderer/RenderNode"
import { useEditorStore } from "../store/editor-store"

export function Canvas() {
    const schema = useEditorStore(
        (s) => s.schema
    )
    return (
    <div className="h-full overflow-auto bg-white p-8">
      {schema.nodes.map((node) => (
        <RenderNode
          key={node.id}
          node={node}
        />
      ))}
    </div>
  )
}