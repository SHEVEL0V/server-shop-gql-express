/** @format */

import { readFileSync } from "fs";
import * as url from "url";

export const readGql = (path = "", importMetaUrl = import.meta.url) => {
  const PATH = url.fileURLToPath(new URL(path, importMetaUrl));

  return readFileSync(PATH, { encoding: "utf-8" });
};
