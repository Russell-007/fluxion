"use client"

import { componentRegistry } from "../schema/registry"
import { UISchemaNode } from "../schema/types"
import { useEditorStore } from "../store/editor-store"
import clsx from "clsx"

interface Props {
  node: UISchemaNode
}

export function RenderNode({ node }: Props) {
  const Component =
    componentRegistry[node.type] as React.ComponentType<any>

  const selectedNodeId = useEditorStore(
    (s) => s.selectedNodeId
  )

  const setSelectedNode = useEditorStore(
    (s) => s.setSelectedNode
  )

  const isSelected =
    selectedNodeId === node.id

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        setSelectedNode(node.id)
      }}
      className={clsx(
        "relative cursor-pointer rounded outline outline-2 transition-all",
        isSelected
          ? "outline-blue-500"
          : "outline-transparent hover:outline-gray-300"
      )}
    >
      <Component {...node.props}>
        {node.children?.map((child) => (
          <RenderNode
            key={child.id}
            node={child}
          />
        ))}
      </Component>
    </div>
  )
}