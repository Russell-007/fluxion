import { PageSchema } from "../schema/types"

export const sampleSchema: PageSchema = {
  version: 1,

  nodes: [
    {
      id: "hero-1",
      type: "hero",

      props: {
        title: "Build faster",
        subtitle:
          "AI-generated interfaces",
      },
    },

    {
      id: "features-1",
      type: "features",

      props: {
        items: [
          {
            title: "AI Generated",
            description:
              "Generate interfaces instantly",
            size: "lg",
          },

          {
            title: "Editable",
            description:
              "Modify visually",
          },

          {
            title: "Exportable",
            description:
              "Clean React code",
          },
        ],
      },
    },
  ],
}