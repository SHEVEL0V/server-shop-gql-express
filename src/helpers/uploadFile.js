/** @format */

import { log } from "console";
import { createWriteStream } from "fs";
import * as url from "url";

export const makePathFile = async (file) => {
  const { createReadStream, filename } = await file;

  const stream = createReadStream();

  const path =
    url.fileURLToPath(new URL("../temp", import.meta.url)) + "/" + filename;

  await new Promise((resolve, reject) =>
    stream
      .on("error", (error) => {
        if (stream.truncated)
          // Delete the truncated file
          fs.unlinkSync(path);
        reject(error);
      })
      .pipe(createWriteStream(path))
      .on("error", reject)
      .on("finish", resolve)
  );

  return path;
};
