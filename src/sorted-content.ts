import { getCollection, type CollectionEntry } from "astro:content";

export const sortedArticleIds = [
  "2024-luks-unlock-with-tailscale-ssh",
  "2023-pfn-cache-system",
  "2023-nextjs-preview-pr",
  "2023-seccon2023-finals",
  "2023-seccon2023-quals",
  "2023-next-embed-tweet",
  "2023-docker-volume-backup-restore",
  "2023-postgres-collation-version-mismatch",
  "2023-wsl-git-gpg",
  "2022-v4l2loopback",
  "2022-ubuntu-apt-mirror",
  "2022-stylelint-with-styled-components",
  "2021-postgresql-valid-checkpoint-record",
  "2021-systemd-reboot",
  "2021-docker-overlay-network-tailscale",
  "2021-docker-compose-v2",
  "2021-docker-buildx-bake",
  "2018-atcoder-test-userscript",
  "2017-raspbian-64bit",
  "2017-git-for-windows-diff-encoding",
  "2016-javascript-function-overload",
  "2016-github-gpg-sign",
  "2015-siv3d-precompiled-header",
] as const satisfies CollectionEntry<"article">["id"][];

export const getSortedArticles = async () => {
  const articles = await getCollection("article");
  return sortedArticleIds.map(
    (id) =>
      articles.find(
        (article) => article.id === id,
      ) as CollectionEntry<"article">,
  );
};

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
