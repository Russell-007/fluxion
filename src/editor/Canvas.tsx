import { sampleSchema } from "../lib/sample-schema"
import { RenderNode } from "../renderer/RenderNode"

export function Canvas() {
  return (
    <div className="h-full overflow-auto bg-white p-8">
      {sampleSchema.nodes.map((node) => (
        <RenderNode
          key={node.id}
          node={node}
        />
      ))}
    </div>
  )
}