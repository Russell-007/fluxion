"use client";

import { useEditorStore } from "../store/editor-store";

export function PropertiesPanel() {
    const schema = useEditorStore(
        (s) => s.schema
    )

    const selectedNodeId = useEditorStore(
        (s) => s.selectedNodeId
    )

    const updateNodeProps = useEditorStore(
        (s) => s.updateNodeProps
    )

      const node = schema.nodes.find(
        (n) => n.id === selectedNodeId
    )

    console.log(node);

    if (!node) {
    return (
      <div className="p-4">
        Select a component
      </div>
    )
  }

  return (
    <div className="space-y-4 p-4">
      <h2 className="font-semibold">
        {node.type}
      </h2>

      {node.props.title && (
        <div>
          <label className="mb-1 block text-sm">
            Title
          </label>

          <input
            className="w-full rounded border p-2"
            value={node.props.title}
            onChange={(e) =>
              updateNodeProps(node.id, {
                title: e.target.value,
              })
            }
          />
        </div>
      )}

      {"subtitle" in node.props && (
        <div>
          <label className="mb-1 block text-sm">
            Subtitle
          </label>

          <textarea
            className="w-full rounded border p-2"
            value={node.props.subtitle}
            onChange={(e) =>
              updateNodeProps(node.id, {
                subtitle: e.target.value,
              })
            }
          />
        </div>
      )}
      {"items" in node.props && (
        <>
        {node.props.items.map((item: any,index: any) => (
        
            <div key={index}>
              <p>Element {index+1}</p>
              <div className="p-2"/>
            {"title" in item && (
        <div>
          <label className="mb-1 block text-sm">
            Title
          </label>

          <input
            className="w-full rounded border p-2"
            value={item.title}
            onChange={(e) =>
              updateNodeProps(node.id, {
                items: node.props.items.map(
                  (i: any, idx: number) =>
                    idx === index
                      ? {
                          ...i,
                          title: e.target.value,
                        }
                      : i
                ),
              })
            }
          />
        </div>
      )}

      {"description" in item && (
        <div>
          <label className="mb-1 block text-sm">
            Description
          </label>

          <textarea
            className="w-full rounded border p-2"
            value={item.description}
            onChange={(e) =>
              updateNodeProps(node.id, {
                items: node.props.items.map(
                 ( i: any, idx: number ) =>
                  idx === index
                 ?{
                  ...i,
                  description: e.target.value,
                 }
                 : i
                ),
              })
            }
          />
        </div>
      )}
        </div>
        ))}
        </>
      )}
    </div>
  )
}