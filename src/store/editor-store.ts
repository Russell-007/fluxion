import { create } from "zustand"
import { PageSchema } from "../schema/types"
import { sampleSchema } from "../lib/sample-schema"

interface EditorStore {
  schema: PageSchema

  selectedNodeId: string | null

  setSelectedNode: (
    id: string | null
  ) => void

  updateNodeProps: (
    nodeId: string,
    props: Record<string, any>,
  ) => void

  addNode: (node: any) => void

  deleteNode: (nodeId: string) => void
}

export const useEditorStore =
  create<EditorStore>((set) => ({
    schema: sampleSchema,

    selectedNodeId: null,

    setSelectedNode: (id) =>
      set({
        selectedNodeId: id,
      }),

    updateNodeProps: (nodeId, props) =>
      set((state) => ({
        schema: {
          ...state.schema,

          nodes: state.schema.nodes.map((node) =>
            node.id === nodeId
              ? {
                  ...node,
                  props: {
                    ...node.props,
                    ...props,
                  },
                }
              : node
          ),
        },
      })),

    addNode: (node) =>
      set((state) => ({
        schema: {
          ...state.schema,
          nodes: [...state.schema.nodes, node],
        },
      })),

    deleteNode: (nodeId) =>
      set((state) => ({
        schema: {
          ...state.schema,
          nodes: state.schema.nodes.filter(
            (n) => n.id !== nodeId
          ),
        },
      })),
  }))