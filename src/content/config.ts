import { z, defineCollection, reference } from "astro:content";

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

const articleCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    year: z.number().int(),
    media: reference("media"),
  }),
});

const mediaCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
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

const workCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      year: z.number().int(),
      tags: z.array(z.string()),
      url: z.string().url(),
      image: image(),
    }),
});

export const collections = {
  link: linkCollection,
  article: articleCollection,
  media: mediaCollection,
  skill: skillCollection,
  work: workCollection,
};
