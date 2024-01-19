import { getCollection, type CollectionEntry } from "astro:content";

export const sortedSkillIds = [
  "kubernetes",
  "rust",
  "go",
  "typescript",
  "react",
  "nextjs",
  "php",
  "cpp",
] as const satisfies CollectionEntry<"skill">["id"][];

export const getSortedSkills = async () => {
  const skills = await getCollection("skill");
  return sortedSkillIds.map(
    (id) => skills.find((skill) => skill.id === id) as CollectionEntry<"skill">,
  );
};

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
