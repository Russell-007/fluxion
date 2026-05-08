import { componentRegistry } from "../schema/registry"
import { UISchemaNode } from "../schema/types"

interface Props {
  node: UISchemaNode
}

export function RenderNode({ node }: Props) {
  const Component =
    componentRegistry[node.type] as React.ComponentType<any>

  if (!Component) {
    return (
      <div>
        Unknown component: {node.type}
      </div>
    )
  }

  return (
    <Component {...node.props}>
      {node.children?.map((child) => (
        <RenderNode
          key={child.id}
          node={child}
        />
      ))}
    </Component>
  )
}