import fs from "fs";

const WorkId = {
  Airpapyrus: "airpapyrus",
  Fes71: "fes71",
  IconCiffelia: "iconCiffelia",
  Koe: "koe",
  MultiEnvironmentMonitor: "multiEnvironmentMonitor",
  PDFPageSize: "pdfPageSize",
  Portfolio2018: "portfolio2018",
  Portfolio2021: "portfolio2021",
  RayTracing: "rayTracing",
  Twauth: "twauth",
  TwauthRs: "twauthRs",
  Twilens: "twilens",
  Updraft: "updraft",
  Wowo: "wowo",
};

// 辞書順に並べる
export const work = {
  [WorkId.Airpapyrus]: {
    id: WorkId.Airpapyrus,
    name: "環境可視化装置",
    year: 2020,
    tags: ["Arduino", "Raspberry Pi", "ESP32", "C++", "Python"],
    url: "https://github.com/ciffelia/airpapyrus",
  },
  [WorkId.Fes71]: {
    id: WorkId.Fes71,
    name: "文化祭Webサイト",
    year: 2018,
    tags: ["Web", "React", "Gatsby", "CSS Animation"],
    url: "https://github.com/ciffelia/fes71.eikogakuen.com",
  },
  [WorkId.IconCiffelia]: {
    id: WorkId.IconCiffelia,
    name: "icon.ciffelia.com",
    year: 2021,
    tags: ["Node.js", "Vercel", "Serverless"],
    url: "https://github.com/ciffelia/icon.ciffelia.com",
  },
  [WorkId.Koe]: {
    id: WorkId.Koe,
    name: "Discord Bot",
    year: 2021,
    tags: ["Discord", "Rust", "Text-to-Speech"],
    url: "https://github.com/ciffelia/koe",
  },
  [WorkId.MultiEnvironmentMonitor]: {
    id: WorkId.MultiEnvironmentMonitor,
    name: "環境観測装置",
    year: 2018,
    tags: ["Arduino", "C++", "ESP32"],
    url: "https://github.com/ciffelia/MultiEnvironmentMonitor",
  },
  [WorkId.PDFPageSize]: {
    id: WorkId.PDFPageSize,
    name: "PDFPageSize",
    year: 2020,
    tags: ["Android", "Kotlin"],
    url: "https://github.com/ciffelia/PDFPageSize",
  },
  [WorkId.Portfolio2018]: {
    id: WorkId.Portfolio2018,
    name: "ポートフォリオ (2018)",
    year: 2018,
    tags: ["Web", "CSS Animation"],
    url: "https://github.com/ciffelia/ciffelia.com/tree/v2018",
  },
  [WorkId.Portfolio2021]: {
    id: WorkId.Portfolio2021,
    name: "ポートフォリオ",
    year: 2021,
    tags: ["Web", "TypeScript", "React", "Next.js"],
    url: "https://github.com/ciffelia/ciffelia.com",
  },
  [WorkId.RayTracing]: {
    id: WorkId.RayTracing,
    name: "Ray Tracing",
    year: 2018,
    tags: ["C++", "OpenSiv3D"],
    url: "https://github.com/ciffelia/RayTracing",
  },
  [WorkId.Twauth]: {
    id: WorkId.Twauth,
    name: "twauth",
    year: 2020,
    tags: ["TypeScript", "Twitter API"],
    url: "https://github.com/ciffelia/twauth",
  },
  [WorkId.TwauthRs]: {
    id: WorkId.TwauthRs,
    name: "twauth-rs",
    year: 2020,
    tags: ["Rust", "Twitter API"],
    url: "https://github.com/ciffelia/twauth-rs",
  },
  [WorkId.Twilens]: {
    id: WorkId.Twilens,
    name: "全文検索アプリ",
    year: 2020,
    tags: [
      "Web",
      "TypeScript",
      "Vue",
      "Nuxt",
      "Node.js",
      "PostgreSQL",
      "Elasticsearch",
    ],
    url: "https://github.com/ciffelia/twilens",
  },
  [WorkId.Updraft]: {
    id: WorkId.Updraft,
    name: "Bare-metal Game",
    year: 2018,
    tags: ["Game", "OS", "UEFI", "C++"],
    url: "https://github.com/ciffelia/Updraft",
  },
  [WorkId.Wowo]: {
    id: WorkId.Wowo,
    name: "wowo",
    year: 2021,
    tags: ["Web", "Go", "Wake-on-LAN"],
    url: "https://github.com/ciffelia/wowo",
  },
};

// 表示される順に並べる
export const workList = [
  work[WorkId.Fes71],
  work[WorkId.Koe],
  work[WorkId.Portfolio2021],
  work[WorkId.Twilens],
  work[WorkId.MultiEnvironmentMonitor],
  work[WorkId.Airpapyrus],
  work[WorkId.Updraft],
  work[WorkId.RayTracing],
  work[WorkId.Portfolio2018],
  work[WorkId.IconCiffelia],
  work[WorkId.PDFPageSize],
  work[WorkId.Wowo],
  work[WorkId.Twauth],
  work[WorkId.TwauthRs],
];

for (const work of workList) {
  fs.writeFileSync(
    `${work.id.toLowerCase()}.json`,
    JSON.stringify(
      {
        name: work.name,
        year: work.year,
        tags: work.tags,
        url: work.url,
        image: `${work.id.toLowerCase()}.png`,
      },
      null,
      2,
    ),
  );
}
