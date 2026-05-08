import { create } from "zustand"
import { PageSchema } from "../schema/types"
import { sampleSchema } from "../lib/sample-schema"

interface EditorStore {
  schema: PageSchema

  selectedNodeId: string | null

  setSelectedNode: (
    id: string | null
  ) => void
}

export const useEditorStore =
  create<EditorStore>((set) => ({
    schema: sampleSchema,

    selectedNodeId: null,

    setSelectedNode: (id) =>
      set({
        selectedNodeId: id,
      }),
  }))