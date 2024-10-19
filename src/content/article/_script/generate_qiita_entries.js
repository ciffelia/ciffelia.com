import fs from "fs";

const data = await fetch(
  "https://qiita.com/api/v2/items?page=1&per_page=100&query=user%3Aciffelia",
).then((res) => res.json());

for (const a of data) {
  const year = parseInt(a.published_at.slice(0, 4));
  if (year < 2024) {
    continue;
  }

  fs.writeFileSync(
    path.join(import.meta.dirname, `../${year}-${a.id}.json`),
    JSON.stringify(
      {
        title: a.title,
        url: a.url,
        year,
        media: "qiita",
      },
      null,
      2,
    ) + "\n",
  );
}
