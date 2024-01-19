import { getCollection, type CollectionEntry } from "astro:content";

export const sortedWorkIds = [
  "portfolio2021",
  "koe",
  "airpapyrus",
  "fes71",
  "twilens",
  "multi-environment-monitor",
  "updraft",
  "raytracing",
  "pdf-page-size",
  "wowo",
  "icon-ciffelia",
  "portfolio2018",
  "twauth",
  "twauthrs",
] as const satisfies CollectionEntry<"work">["id"][];

export const getSortedWorks = async () => {
  const works = await getCollection("work");
  return sortedWorkIds.map(
    (id) => works.find((work) => work.id === id) as CollectionEntry<"work">,
  );
};
