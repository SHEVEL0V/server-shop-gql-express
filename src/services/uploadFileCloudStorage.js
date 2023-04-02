/** @format */
import * as fs from "fs";
import * as url from "url";
import { v4 as uuidv4 } from "uuid";
import { authModelCloud } from "./authGoogle.js";
import { Storage } from "@google-cloud/storage";

export const uploadFileCloudStorage = async (file) => {
  const jwt = await authModelCloud();
  const bucketName = "buket-image";
  const storage = new Storage({ authClient: jwt });

  const { createReadStream, filename } = await file;
  const stream = createReadStream();

  const path =
    url.fileURLToPath(new URL("../temp", import.meta.url)) +
    "/" +
    uuidv4() +
    "-" +
    filename;

  await new Promise((resolve, reject) =>
    stream
      .on("error", (error) => {
        if (stream.truncated)
          // Delete the truncated file
          fs.unlinkSync(path);
        reject(error);
      })
      .pipe(fs.createWriteStream(path))
      .on("error", reject)
      .on("finish", resolve)
  );

  const [File] = await storage.bucket(bucketName).upload(path);

  console.log(`🔵 File ${path} uploaded to ${bucketName}.`);

  fs.unlinkSync(path);

  return File.metadata.mediaLink;
};
