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

const skillCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      since: z.number().int(),
      icon: image(),
    }),
});

export const collections = {
  link: linkCollection,
  skill: skillCollection,
};
