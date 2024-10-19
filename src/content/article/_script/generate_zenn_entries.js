import fs from "fs";

const data = await fetch(
  "https://zenn.dev/api/articles?username=ciffelia",
).then((res) => res.json());

for (const a of data.articles) {
  const year = parseInt(a.published_at.slice(0, 4));
  if (year < 2024) {
    continue;
  }

  fs.writeFileSync(
    path.join(import.meta.dirname, `../${year}-${a.slug}.json`),
    JSON.stringify(
      {
        title: a.title,
        url: `https://zenn.dev${a.path}`,
        year,
        media: "zenn",
      },
      null,
      2,
    ) + "\n",
  );
}
