import fs from "fs";
import path from "path";

fs.readdirSync(path.join(import.meta.dirname, ".."))
  .reverse()
  .forEach((file) => {
    if (!file.endsWith(".json")) {
      return;
    }
    console.log(`"${file.slice(0, -5)}",`);
  });
