import { TextSize } from "../lib/design_system/types"

interface FeaturesProps {
  items: {
    title: string
    description: string
    size: TextSize
  }[]
}



export function FeaturesSection({
  items,
}: FeaturesProps) {
  return (
    <section className="py-20">
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border p-6"
          >
            <h3
              className={`font-semibold text-${
                item.size
              }`}
            >
              {item.title}
            </h3>

            <p className="mt-2 text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}