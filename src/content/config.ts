import { z, defineCollection } from "astro:content";

const linkCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      url: z.string().url(),
      color: z.string(),
      icon: image(),
    }),
});

export const collections = {
  link: linkCollection,
};
