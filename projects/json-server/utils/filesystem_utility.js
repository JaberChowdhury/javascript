import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const utils = {};

const dataPath = path.join(__dirname, "data.json");

utils.readFile = async (filePath = dataPath) => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading file:", err.message);
    return null;
  }
};

export { utils };
