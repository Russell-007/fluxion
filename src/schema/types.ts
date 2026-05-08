export type NodeType =
  | keyof typeof import("./registry").componentRegistry

export interface BaseNode {
    id: string
    type: NodeType
    props: Record<string, any>
    children?: UISchemaNode[]
}

export type UISchemaNode = BaseNode

export interface PageSchema {
    version: number
    nodes: UISchemaNode[]
}